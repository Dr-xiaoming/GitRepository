import { createStore, Store, useStore as useVuexStore } from 'vuex'

import login from './login/login'

import { IRootState, IStoreType } from './types'

const store = createStore<IRootState>({
  state() {
    return {
      name: 'admin',
      password: '123456',
      islogin:false
    }
  },
  mutations: {},
  getters: {},
  actions: {},
  modules: {
    login
  }
})


export function useStore(): Store<IStoreType> {
  return useVuexStore()
}

export default store
