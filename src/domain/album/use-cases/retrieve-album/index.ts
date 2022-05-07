import { createAsyncThunk } from "@reduxjs/toolkit"
import { AlbumsState } from "../../album-slice"

export interface IAlbumResponse {
  id: string
  name: string
}

const retireveAlbumList = createAsyncThunk<{ albums: AlbumsState }, void, { extra: { existingAlbums: Array<IAlbumResponse>}}>('albums/retireveAlbumList', async (
  _,{ extra: { existingAlbums } }) => {
    return { albums: existingAlbums }
  })

export { retireveAlbumList }