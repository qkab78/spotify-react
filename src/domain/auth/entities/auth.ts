export type IAuthParams = {
  client_id: string
  response_type: string
  scope: string
  redirect_uri: string
  state: string
}

export type IAuth = {
  url: string
  params: IAuthParams
}

export type Auth = {
  accessToken: string,
  isAuthenticated: boolean
}