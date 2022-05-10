import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { albumsSlice } from './album/album-slice'
import { AlbumListQuery } from './album/use-cases/queries/album.query'

const rootReducer = combineReducers({
  [albumsSlice.name]: albumsSlice.reducer
})

const createStore = ({ albumListQuery }: { albumListQuery: AlbumListQuery }) => {
  const extraArgument = { albumListQuery }

  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      thunk: { extraArgument }
    })
  })
  
  return store
}

export type RootState = ReturnType<typeof rootReducer>

export { createStore }