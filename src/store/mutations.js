import { ADD, CUT, PAGETITLE } from './mutation_type'

const mutations = {
  [ADD](state, payLoad) {
    state.count += payLoad
  },
  [CUT](state, payLoad) {
    state.count -= payLoad
  },
  [PAGETITLE](state, payLoad) {
    state.pageTitle = payLoad
  }
}

export default mutations
