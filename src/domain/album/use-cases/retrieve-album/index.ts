import { createAsyncThunk } from "@reduxjs/toolkit"
import { AlbumsState } from "../../album-slice"
import { AlbumListQuery } from "../queries/retrieve-album.query"

export interface IAlbumResponse {
  id: string
  name: string
}

const retireveAlbumList = createAsyncThunk<{ albums: AlbumsState }, void, { extra: { albumListQuery: AlbumListQuery }}>('albums/retireveAlbumList', async (
  _,{ extra: { albumListQuery } }) => {
    return albumListQuery()
  })

export { retireveAlbumList }