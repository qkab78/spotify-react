import { rest } from 'msw'

export const handlers = [
  rest.post(`${process.env.REACT_APP_SPOTIFY_URL}/authorize`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        isAuthenticated: true,
        accessToken: 'accessToken'
      })
    )
  })
]