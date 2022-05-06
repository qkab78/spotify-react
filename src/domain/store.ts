import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { albumsSlice } from './album/album-slice'

const rootReducer = combineReducers({
  [albumsSlice.name]: albumsSlice.reducer
})

const createStore = () => {
  const store = configureStore({ reducer: rootReducer })

  return store
}

export type RootState = ReturnType<typeof rootReducer>

export { createStore }