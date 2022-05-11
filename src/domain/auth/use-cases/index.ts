import { createAsyncThunk } from "@reduxjs/toolkit"
import { Auth, IAuth } from "../entities/auth"
import { AuthQuery } from "./queries/auth.query"

export interface ISpotifyAuthResponse {
  isAuthenticated: boolean
  accessToken: string
  refreshToken: string
}

const authenticateUser = createAsyncThunk<Auth, IAuth, { extra: { authQuery: AuthQuery }}>(
  'auth/authenticateUser',
  async (authRequest, { extra: { authQuery } }) => {
    const { authenticateUser } = await authQuery()
    // Simulate an authentication request
    const authResponse = await fetch(`${authRequest.url}?${new URLSearchParams(authRequest.params)}`)
    await authResponse.json()

    const callbackResponse = await fetch(authRequest.params.redirect_uri)
    const callbackData: { code: string, state: string } = await callbackResponse.json()

    const formData = new FormData()
    formData.append('grant_type', 'authorization_code')
    formData.append('code', callbackData.code)
    formData.append('redirect_uri', authRequest.params.redirect_uri)

    const bufferToken = Buffer.from(`${process.env.REACT_APP_SPOTIFY_CLIENT_ID}:${process.env.REACT_APP_SPOTIFY_CLIENT_SECRET}`)
    const authTokenResponse = await fetch(`${process.env.REACT_APP_SPOTIFY_URL}/api/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Bearer ${bufferToken}`
      },
      body: formData,
    })
    const authToken = await authTokenResponse.json()

    return authenticateUser({
      accessToken: authToken.access_token,
      isAuthenticated: true,
      refreshToken: authToken.refresh_token,
    })
  }
)

export { authenticateUser }