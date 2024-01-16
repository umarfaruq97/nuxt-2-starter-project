export default function ({ store, $axios }) {
  $axios.onRequest((config) => {
    // console.log('Making request to ' + config.url)
  })

  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status)
    const statusText = error.response && error.response.statusText
    const data = error.response && error.response.data

    if (code === 401) {
      store.dispatch('auth/logout')
      location.reload()
    }
    if (code === 500) {
      store.dispatch('notification/showAlert', {
        status: statusText || 'error',
        message:
          data.message ||
          data.error ||
          data ||
          error ||
          'Terjadi kendala pada sistem, hubungi IT Support',
      })
    }
  })
}
