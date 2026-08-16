export default defineNuxtRouteMiddleware(async (route) => {
  // 勉強のためログインの仕組みを自作するが、安全性考慮のためいずれは
  // nuxt-auth-utilsのuseUserSession()を使用するのが望ましい。
  const { loggedIn } = await useAuth()
  if (!loggedIn.value && route.path !== '/login') {
    return navigateTo('/login')
  }
})
