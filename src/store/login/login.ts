import { Module } from 'vuex'
import { ILoginState  } from './type'
import { IRootState } from '../types'


const loginModule: Module<ILoginState, IRootState>= {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      userMenus: [],
      name:'admin',
      password:123456,
    }
  },
  getters: {},
  mutations: {
  },
  actions: {
  }
}

export default loginModule
