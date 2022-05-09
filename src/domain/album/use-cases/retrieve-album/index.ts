import { createAsyncThunk } from "@reduxjs/toolkit"
import { AlbumsState } from "../../album-slice"
import { AlbumListQuery } from "../queries/album.query"

export interface IAlbumResponse {
  id: string
  name: string
}

const retrieveAlbumList = createAsyncThunk<{ albums: AlbumsState }, void, { extra: { albumListQuery: AlbumListQuery }}>(
  'albums/retrieveAlbumList',
  async (_,{ extra: { albumListQuery } }) => {
    const { getAllAlbums } = await albumListQuery()
    return getAllAlbums()
  }
)

const saveAlbumToTheList = createAsyncThunk<IAlbumResponse, IAlbumResponse, { extra: { albumListQuery: AlbumListQuery }}>(
  'albums/saveAlbumToTheList',
  async (album, { extra: { albumListQuery } }) => {
    const { addAlbumToTheList } = await albumListQuery()
    return addAlbumToTheList(album)
  }
)

export { retrieveAlbumList, saveAlbumToTheList }