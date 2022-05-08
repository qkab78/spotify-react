import { AlbumListQuery, AlbumListResult } from "../../use-cases/queries/retrieve-album.query"

type IInMemoryAlbumListQuery = { existingAlbums?: AlbumListResult['albums'] }

const createInMemoryAlbumListQuery = ({ existingAlbums = [] }: IInMemoryAlbumListQuery): AlbumListQuery => async () => ({ albums: existingAlbums })

export { createInMemoryAlbumListQuery }