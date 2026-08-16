import type { ProjectHistory } from '../../types/api/skillSheet/projectHistory'
import { useAuth } from '~/composables/auth/useAuth'

export const useProjectHistory = async () => {
  const { token } = await useAuth()
  const getProjectHistory = async () => {
    const {
      data: basicInfoData,
      error,
      pending,
      refresh,
    } = await useFetch<ProjectHistory>(`/api/skillSheet/projectHistory`, {
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

  const updateProjectHistory = async (reqBody: ProjectHistory) => {
    // 保存は単発アクションなので $fetch（毎回1回だけ送る・キャッシュ/再発火なし）
    try {
      const response = await $fetch<any>(`/api/skillSheet/projectHistory`, {
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
    getProjectHistory,
    updateProjectHistory,
  }
}
