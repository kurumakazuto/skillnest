import type { BasicInfo } from '../../types/api/skillSheet/basicInfo'
import { useAuth } from '~/composables/auth/useAuth'

export const useBasicInfo = async () => {
  const { token } = await useAuth()
  const getBasicInfo = async () => {
    const {
      data: basicInfoData,
      error,
      pending,
      refresh,
    } = await useFetch<BasicInfo>(`/api/skillSheet/basicInfo`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
    })
    return {
      data: ref(basicInfoData),
      error,
      pending,
      refresh,
    }
  }

  const updateBasicInfo = async (reqBody: BasicInfo) => {
    const { data: response, error } = await useFetch<any>(`/api/skillSheet/basicInfo`, {
      method: 'POST',
      body: reqBody,
    })
    return {
      data: response,
      error: error,
    }
  }

  return {
    getBasicInfo,
    updateBasicInfo,
  }
}
