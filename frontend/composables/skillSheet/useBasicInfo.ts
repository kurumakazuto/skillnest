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
      immediate: false,
    })
    return {
      data: ref(basicInfoData),
      error,
      pending,
      refresh,
    }
  }

  const updateBasicInfo = async (reqBody: BasicInfo) => {
    // 保存は単発アクションなので $fetch（毎回1回だけ送る・キャッシュ/再発火なし）
    try {
      const response = await $fetch<any>(`/api/skillSheet/basicInfo`, {
        method: 'POST',
        body: reqBody,
      })
      return {
        data: ref(response),
        error: ref(null),
      }
    } catch (error) {
      // コンポーネント側は error.value.statusCode を見るので FetchError をそのまま渡す
      return {
        data: ref(null),
        error: ref(error as any),
      }
    }
  }

  return {
    getBasicInfo,
    updateBasicInfo,
  }
}
