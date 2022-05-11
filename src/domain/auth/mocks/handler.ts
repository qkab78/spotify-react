import { rest } from 'msw'

export const handlers = [
  rest.get(`${process.env.REACT_APP_SPOTIFY_URL}/authorize`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({ isAuthenticated: true, accessToken: 'accessToken' })
    )
  }),
  rest.get(`${process.env.REACT_APP_SPOTIFY_URL}/callback`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({ code: 'CODE', state: 'STATE' })
    )
  }),
  rest.post(`${process.env.REACT_APP_SPOTIFY_URL}/api/token`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        access_token: 'access_token',
        token_type: 'Bearer',
        scope: 'scope',
        expires_in: 3600,
        refresh_token: 'refresh_token'
      })
    )
  })
]