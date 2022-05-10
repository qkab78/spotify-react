import { setupServer } from 'msw/node'
import { handlers as authHandlers } from '../auth/mocks/handler'

const handlers = [...authHandlers]

export const server = setupServer(...handlers)