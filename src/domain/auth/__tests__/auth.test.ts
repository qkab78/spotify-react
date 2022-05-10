import { authSUT } from "../builder/sut.builder"

describe('Authentication flow', () => {
  test('should authenticate user', async () => {
    const { authenticateUser, selectAuthInfos } = authSUT().build()

    const SCOPE = 'user-read-private user-read-email'
    const CLIENT_ID = 'CLIENT_ID'
    const REDIRECT_URI = 'REDIRECT_URI/callback'
    const STATE = 'STATE'
    const SPOTIFY_URL = `${process.env.REACT_APP_SPOTIFY_URL}/authorize`

    await authenticateUser({
      url: SPOTIFY_URL,
      params: {
        client_id: CLIENT_ID,
        response_type: 'code',
        scope: SCOPE,
        redirect_uri: REDIRECT_URI,
        state: STATE,
      }
    })

    expect(selectAuthInfos().authInfos.accessToken).toBeDefined()
    expect(selectAuthInfos().authInfos.isAuthenticated).toBeTruthy()
  })
})

export {}