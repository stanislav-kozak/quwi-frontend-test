export default function ({ $axios, route, redirect }) {
  $axios.onError((error) => {
    if (error.response.status === 401 && route.path !== '/login') {
      return redirect('Login')
    }
  })
}
