export const useRefine = () => {
  const refine = async (field: string, text: string): Promise<string> => {
    const res = await $fetch<{ refinedText: string }>('/api/skillSheet/refine', {
      method: 'POST',
      body: { field, text },
    })
    return res.refinedText
  }
  return { refine }
}
