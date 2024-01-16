export const state = () => ({
  alert: {
    message: '',
    status: '',
  },
})

export const mutations = {
  setAlert(state, value) {
    state.alert = value
  },
}

export const actions = {
  showAlert({ commit }, data) {
    commit('setAlert', data)
  },
}
