// 文字数制限
export function validateMaxLengthExceeded(
  value: string | null,
  maxLength: number,
  fieldName?: string
) {
  if (value && value.length > maxLength) {
    return {
      hasError: true,
      errorMessage: `${fieldName}は${maxLength}以内で入力してください`,
    }
  }
  return {
    hasError: false,
    errorMessage: '',
  }
}

// 数値の範囲チェック（未入力は許容、min〜maxの範囲外でtrue）
export function validateOutOfRange(
  value: number | null,
  minLength: number,
  maxLength: number,
  fieldName?: string
) {
  if (value === null || value === undefined) {
    return {
      hasError: false,
      errorMessage: '',
    }
  }
  if (value < minLength || value > maxLength) {
    return {
      hasError: true,
      errorMessage: `${fieldName}は${minLength}〜${maxLength}で入力してください`,
    }
  }
  return {
    hasError: false,
    errorMessage: '',
  }
}
