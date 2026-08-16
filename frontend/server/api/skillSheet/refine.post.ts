export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const config = useRuntimeConfig(event)
  return await $fetch(`${config.fastApiBaseUrl}/refine`, {
    method: 'POST',
    body,
  })
})
