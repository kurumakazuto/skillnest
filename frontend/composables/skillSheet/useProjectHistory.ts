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
    })
    return {
      data: ref(basicInfoData),
      error,
      pending,
      refresh,
    }
  }

  const updateProjectHistory = async (reqBody: ProjectHistory) => {
    const { data: response, error } = await useFetch<any>(`/api/skillSheet/projectHistory`, {
      method: 'POST',
      body: reqBody,
    })
    return {
      data: response,
      error: error,
    }
  }

  return {
    getProjectHistory,
    updateProjectHistory,
  }
}
