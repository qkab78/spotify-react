import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { albumsSlice } from './album/album-slice'
import { AlbumListQuery } from './album/use-cases/queries/album.query'
import { authSlice } from './auth/auth.slice'
import { AuthQuery } from './auth/use-cases/queries/auth.query'

const rootReducer = combineReducers({
  [albumsSlice.name]: albumsSlice.reducer,
  [authSlice.name]: authSlice.reducer,
})

export type CreatedStore = {
  albumListQuery: AlbumListQuery,
  authQuery: AuthQuery
}

const createStore = ({ albumListQuery, authQuery }: CreatedStore) => {
  const extraArgument = { albumListQuery, authQuery }

  const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      thunk: { extraArgument }
    })
  })
  
  return store
}

export type RootState = ReturnType<typeof rootReducer>

export { createStore }