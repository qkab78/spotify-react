import { AlbumListQuery, AlbumListResult } from "../../use-cases/queries/retrieve-album.query"

const createInMemoryQuestionListQuery = ({ existingAlbums = [] }: { existingAlbums?: AlbumListResult['albums'] }): AlbumListQuery => async () => ({ albums: existingAlbums })

export { createInMemoryQuestionListQuery }