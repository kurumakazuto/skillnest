from fastapi import APIRouter

router = APIRouter()

@router.post("/signup")
def signup():
    return {"message": "signup"}