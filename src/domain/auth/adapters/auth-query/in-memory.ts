import { ISpotifyAuthResponse } from "../../use-cases"
import { AuthQuery } from "../../use-cases/queries/auth.query"

const createInMemoryAuthQuery = (): AuthQuery => async () => ({
  authenticateUser: async (authRequest: ISpotifyAuthResponse) => ({
    accessToken: authRequest.accessToken,
    isAuthenticated: authRequest.isAuthenticated,
    refreshToken: authRequest.refreshToken,
  })
})

export { createInMemoryAuthQuery }