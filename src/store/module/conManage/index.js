import fetcher from '@/utils/fetcher.js'
import { 
  GETCONLIST, 
  SETTOTAL, 
  SETLOADING, 
  SETTABLE, 
  SETTOAST 
} from '../../mutation_type'
export const conManages = {
  namespaced: true,
  state: {
    data: [],
    loading: false,
    total: 30,
    errToast: '暂无数据',
    pageCon: {
      pageNum: 1,
      pageSize: 5,
      tid:1
    }
  },
  actions:{
    async getConList({ commit, state}){
      commit('SETLOADING')
      const { pageCon } = state
      const data = await fetcher.post('http://39.105.31.83:8083/api/getConList', pageCon).then(res=>{
        return res;
      })
      if(data.code){
        commit('GETCONLIST', data.data)
        commit('SETTOTAL', data.total)
        setTimeout(function () {
          commit('SETLOADING')
        }, 500)
      } else {
        commit('SETLOADING')
        commit('SETTOAST',data.errmsg)
      }
    },
    setTable({commit},payLoad){
      commit('SETTABLE',payLoad)
    }
  },
  getters:{},
  mutations: {
    [GETCONLIST](state, payLoad){
      state.data = payLoad
    },
    [SETTOTAL](state, payLoad){
      state.total = payLoad
    },
    [SETLOADING](state){
      state.loading= !state.loading
    },
    [SETTABLE](state,payLoad){
      state.pageCon = Object.assign({},state.pageCon,payLoad)
    },
    [SETTOAST](state,payLoad){
      state.errToast = payLoad
    }
  }
}
