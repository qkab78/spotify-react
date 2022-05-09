import { createAsyncThunk } from "@reduxjs/toolkit"
import { AlbumsState } from "../../album-slice"
import { AlbumListQuery, SaveAlbumToTheListQuery } from "../queries/album.query"

export interface IAlbumResponse {
  id: string
  name: string
}

const retrieveAlbumList = createAsyncThunk<{ albums: AlbumsState }, void, { extra: { albumListQuery: AlbumListQuery }}>(
  'albums/retrieveAlbumList',
  async (_,{ extra: { albumListQuery } }) => albumListQuery()
)

const saveAlbumToTheList = createAsyncThunk<IAlbumResponse | undefined, IAlbumResponse, { extra: { saveAlbumToTheListQuery: SaveAlbumToTheListQuery }}>(
  'albums/saveAlbumToTheList',
  async (album, { extra: { saveAlbumToTheListQuery } }) => saveAlbumToTheListQuery(album)
)

// const saveAlbumToTheList = createAsyncThunk<{ album: IAlbumResponse }, void, { extra: { saveAlbumToTheListQuery: SaveAlbumToTheListQuery }}>('albums/saveAlbumToTheList', async (_,{ extra: { saveAlbumToTheListQuery } }) => saveAlbumToTheListQuery())

export { retrieveAlbumList, saveAlbumToTheList }