export default defineNuxtRouteMiddleware(() => {
  // 勉強のためログインの仕組みを自作するが、安全性考慮のためいずれは
  // nuxt-auth-utilsのuseUserSession()を使用するのが望ましい。
  // const { loggedIn } = useAuth()
  // if (!loggedIn.value) {
  //   return navigateTo('/login')
  // }
})
