import { createAsyncThunk } from "@reduxjs/toolkit"
import { Auth, IAuth } from "../entities/auth"
import { AuthQuery } from "./queries/auth.query"

export interface ISpotifyAuthResponse {
  isAuthenticated: boolean
  accessToken: string
}

const authenticateUser = createAsyncThunk<Auth, IAuth, { extra: { authQuery: AuthQuery }}>(
  'auth/authenticateUser',
  async (authRequest, { extra: { authQuery } }) => {
    const { authenticateUser } = await authQuery()
    // Simulate an authentication request
    console.log(authRequest);
    const payload = {
      isAuthenticated: true,
      accessToken: 'Tessst'
    } as ISpotifyAuthResponse

    return authenticateUser(payload)
  }
)

export { authenticateUser }