import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { albumsSlice } from './album/album-slice'
import { AlbumListQuery } from './album/use-cases/queries/retrieve-album.query'

const rootReducer = combineReducers({
  [albumsSlice.name]: albumsSlice.reducer
})

const createStore = ({ albumListQuery }: { albumListQuery: AlbumListQuery }) => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      thunk: {
        extraArgument: { albumListQuery }
      }
    })
  })

  return store
}

export type RootState = ReturnType<typeof rootReducer>

export { createStore }