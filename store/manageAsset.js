import { assetListDummy } from '~/utils/data'

export const state = () => ({
  assetList: {
    data: [],
    isLoading: false,
    status: null,
  },
  assetDetail: {
    data: null,
    isLoading: false,
    status: null,
  },
})

export const getters = {
  assetList(state) {
    return state.assetList
  },
  assetDetail(state) {
    return state.assetDetail
  },
}

export const mutations = {
  setAssetList(state, value) {
    state.assetList = value
  },
}

export const actions = {
  async getAssetList({ commit, state }, params) {
    try {
      commit('setAssetList', {
        data: state.assetList.data,
        isLoading: true,
        status: 'FETCHING',
      })
      const result = await this.$axios
        .get('/asset/list', {
          params,
        })
        .then(function (res) {
          if (res.code === 200) {
            commit('setAssetList', {
              data: res.data,
              isLoading: false,
              status: 'ERROR',
            })
          } else {
            commit('setAssetList', {
              data: [],
              isLoading: false,
              status: 'FAILED',
            })
          }
          return res
        })
        .catch(function (error) {
          const assetResult =
            state.assetList.data.length > 0
              ? JSON.parse(JSON.stringify(state.assetList.data))
              : [...assetListDummy]
          commit('setAssetList', {
            data: assetResult,
            isLoading: false,
            status: 'ERROR',
          })
          return error
        })
      return result
    } catch (error) {}
  },
}
