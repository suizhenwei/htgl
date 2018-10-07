export default {
  add({ commit }, payLoad) {
    commit('ADD', payLoad)
  },
  cut({ commit }, payLoad) {
    commit('CUT', payLoad)
  },
  pageTitle({ commit }, payLoad) {
    commit('PAGETITLE', payLoad)
  }
}
