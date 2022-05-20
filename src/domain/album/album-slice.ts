import { createEntityAdapter, createSlice } from "@reduxjs/toolkit"
import { IAlbum } from "./entities/album"
import { removeAlbumFromTheList, removeAlbumsFromTheList, retrieveAlbumList, saveAlbumToTheList } from "./use-cases"

enum ALBUM_SLICE { NAME = 'albums' }

const albumEntityAdapter = createEntityAdapter<IAlbum>()
export const initialState = albumEntityAdapter.getInitialState()

const albumsSlice = createSlice({
  name: ALBUM_SLICE.NAME,
  initialState,
  reducers: {},
  extraReducers: (builder) => builder
    .addCase(retrieveAlbumList.fulfilled, (state, action) => albumEntityAdapter.setAll(state, action.payload.albums))
    .addCase(saveAlbumToTheList.fulfilled, (state, action) => albumEntityAdapter.addOne(state, action.payload))
    .addCase(removeAlbumFromTheList.fulfilled, (state, action) => albumEntityAdapter.removeOne(state, action.payload))
    .addCase(removeAlbumsFromTheList.fulfilled, (state, action) => albumEntityAdapter.removeMany(state, action.payload))
})

export type AlbumsState = Array<IAlbum>
export { albumsSlice, ALBUM_SLICE, albumEntityAdapter }