import { ILoginState } from './login/type'

export interface IRootState {
  name: string
  password: string
  islogin: boolean
}

export interface IRootWithModule {
  login: ILoginState
}

export type IStoreType = IRootState & IRootWithModule
