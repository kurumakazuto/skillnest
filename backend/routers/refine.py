from __future__ import annotations

from enum import Enum

import anthropic
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

router = APIRouter()


# 整形対象の項目（フロントのバリデーション上限に合わせる）
class RefineField(str, Enum):
    self_promotion = "selfPromotion"
    specialties = "specialties"
    summary = "summary"


# 項目ごとの表示名と文字数上限
FIELD_SETTINGS = {
    RefineField.self_promotion: {"label": "自己PR", "max_length": 300},
    RefineField.specialties: {"label": "得意分野", "max_length": 150},
    RefineField.summary: {"label": "業務概要", "max_length": 300},
}


class RefineRequest(BaseModel):
    field: RefineField
    text: str


class RefineResponse(BaseModel):
    refinedText: str


# Claudeクライアントは初回リクエスト時に生成する
# （モジュール読み込み時に作ると APIキー未設定でアプリ起動ごと落ちるため遅延生成）
_client: anthropic.AsyncAnthropic | None = None


def get_client() -> anthropic.AsyncAnthropic:
    global _client
    if _client is None:
        # ANTHROPIC_API_KEY を環境変数から自動で読む
        _client = anthropic.AsyncAnthropic()
    return _client


@router.post("/refine", response_model=RefineResponse)
async def refine(req: RefineRequest) -> RefineResponse:
    text = req.text.strip()
    if not text:
        raise HTTPException(status_code=400, detail="text は必須です")

    setting = FIELD_SETTINGS[req.field]
    label = setting["label"]
    max_length = setting["max_length"]

    system = (
        "あなたは日本語の職務経歴書（スキルシート）の編集者です。"
        f"渡された「{label}」の文章を、より読みやすく自然な日本語に整えてください。\n"
        "ルール:\n"
        "- 書かれていない事実や経歴を追加しない。誇張しない。\n"
        "- 内容の意味は変えず、表現・語順・誤字脱字を整える。\n"
        f"- {max_length}文字以内に収める。\n"
        "- 整えた本文だけを返す。前置きや説明、囲み記号は付けない。"
    )

    try:
        message = await get_client().messages.create(
            model="claude-opus-4-8",
            max_tokens=2000,
            system=system,
            messages=[{"role": "user", "content": text}],
        )
    except anthropic.APIError as e:
        raise HTTPException(status_code=502, detail=f"整形に失敗しました: {e}")

    refined = "".join(
        block.text for block in message.content if block.type == "text"
    ).strip()
    return RefineResponse(refinedText=refined)
