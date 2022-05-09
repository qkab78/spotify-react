import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { albumsSlice } from './album/album-slice'
import { AlbumListQuery, SaveAlbumToTheListQuery } from './album/use-cases/queries/album.query'

const rootReducer = combineReducers({
  [albumsSlice.name]: albumsSlice.reducer
})
type CreatedStore = {
  albumListQuery: AlbumListQuery
  saveAlbumToTheListQuery: SaveAlbumToTheListQuery
}

const createStore = ({ albumListQuery, saveAlbumToTheListQuery }: CreatedStore) => {
  const extraArgument = { albumListQuery, saveAlbumToTheListQuery }

  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      thunk: { extraArgument }
    })
  })

  console.log('STORE ===> ', store.getState());
  
  return store
}

export type RootState = ReturnType<typeof rootReducer>

export { createStore }