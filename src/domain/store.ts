import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { albumsSlice } from './album/album-slice'
import { IAlbumResponse } from './album/use-cases'

const rootReducer = combineReducers({
  [albumsSlice.name]: albumsSlice.reducer
})

const createStore = ({ existingAlbums = [] }: { existingAlbums?: IAlbumResponse[] }) => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      thunk: {
        extraArgument: { existingAlbums }
      }
    })
  })

  return store
}

export type RootState = ReturnType<typeof rootReducer>

export { createStore }