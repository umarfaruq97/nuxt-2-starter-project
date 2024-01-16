export const state = () => ({
  loggedIn: false,
  token: null,
  user: null,
})

export const getters = {
  isAuthenticated(state) {
    return state.token
  },
}

export const mutations = {
  setLoggedIn(state, value) {
    state.loggedIn = value
  },
  setUser(state, value) {
    state.user = value
  },
  logout(state) {
    state.loggedIn = false
    state.token = null
  },
}

export const actions = {
  login({ commit }, payload) {
    this.$axios
      .post('/login', payload)
      .then((res) => {
        commit('setLoggedIn', true)
        commit('setUser', res.data)
      })
      .catch((_err) => {
        commit('setLoggedIn', false)
      })
  },
  logout({ commit }) {
    commit('logout')
  },
}
