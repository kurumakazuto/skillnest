// 必須
export function validateRequiredString(value: string, fieldName: string) {
  if (!value) {
    throw createError({
      statusCode: 400,
      statusMessage: `${fieldName}は必須です。`,
    })
  }
}

// 文字数制限
export function validateMaxLengthString(
  value: string | null,
  fieldName: string,
  maxLength: number
) {
  if (value && value.length > maxLength) {
    throw createError({
      statusCode: 400,
      statusMessage: `${fieldName}は${maxLength}文字以内で入力してください。`,
    })
  }
}
