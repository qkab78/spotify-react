import { AlbumListQuery, AlbumListResult, SaveAlbumToTheListQuery, SaveAlbumToTheListResult } from "../../use-cases/queries/album.query"

type IInMemoryAlbumListQuery = {
  existingAlbums?: AlbumListResult['albums']
}

const createInMemoryAlbumListQuery = ({ existingAlbums = [] }: IInMemoryAlbumListQuery): AlbumListQuery => async () => ({ albums: existingAlbums })
const createInMemorySaveAlbumToTheListQuery = (newAlbum?: SaveAlbumToTheListResult): SaveAlbumToTheListQuery => async () => newAlbum

export { createInMemoryAlbumListQuery, createInMemorySaveAlbumToTheListQuery }