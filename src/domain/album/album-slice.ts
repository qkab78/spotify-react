import { createSlice } from "@reduxjs/toolkit"
import { retireveAlbumList } from "./use-cases"

type AlbumsState = Array<{
  id: string;
  name: string;
}>
enum ALBUM_SLICE { NAME = 'albums' }

const initialState = [] as AlbumsState

const albumsSlice = createSlice({
  name: ALBUM_SLICE.NAME,
  initialState,
  reducers: {},
  extraReducers: (builder) => builder.addCase(retireveAlbumList, (state, action) => action.payload.albums)
})

export { albumsSlice, ALBUM_SLICE }