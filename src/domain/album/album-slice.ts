import { createEntityAdapter, createSlice, current } from "@reduxjs/toolkit"
import { IAlbum } from "./entities/album"
import { retrieveAlbumList, saveAlbumToTheList } from "./use-cases"

enum ALBUM_SLICE { NAME = 'albums' }

const albumEntityAdapter = createEntityAdapter<IAlbum>()


const albumsSlice = createSlice({
  name: ALBUM_SLICE.NAME,
  initialState: albumEntityAdapter.getInitialState(),
  reducers: {},
  extraReducers: (builder) => builder
    .addCase(retrieveAlbumList.fulfilled, (state, action) => albumEntityAdapter.setAll(state, action.payload.albums))
    .addCase(saveAlbumToTheList.fulfilled, (state, action) => {
      console.log(action, current(state.entities))
      if(action.payload) {
        albumEntityAdapter.addOne(state, action.payload)
      }
    })
})

export type AlbumsState = Array<IAlbum>
export { albumsSlice, ALBUM_SLICE, albumEntityAdapter }