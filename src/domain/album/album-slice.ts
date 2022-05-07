import { createEntityAdapter, createSlice } from "@reduxjs/toolkit"
import { retireveAlbumList } from "./use-cases"

export interface IAlbum {
  id: string;
  name: string;
}
enum ALBUM_SLICE { NAME = 'albums' }

const albumEntityAdapter = createEntityAdapter<IAlbum>()


const albumsSlice = createSlice({
  name: ALBUM_SLICE.NAME,
  initialState: albumEntityAdapter.getInitialState(),
  reducers: {},
  extraReducers: (builder) => builder.addCase(retireveAlbumList, (state, action) => {
    albumEntityAdapter.setAll(state , action.payload.albums)
  })
})

export type AlbumsState = Array<IAlbum>
export { albumsSlice, ALBUM_SLICE, albumEntityAdapter }