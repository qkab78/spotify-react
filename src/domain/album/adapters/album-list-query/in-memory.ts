import { IAlbumResponse } from "../../use-cases"
import { AlbumListQuery, AlbumListResult } from "../../use-cases/queries/album.query"

type IInMemoryAlbumListQuery = {
  existingAlbums?: AlbumListResult['albums']
}

const createInMemoryAlbumListQuery = ({ existingAlbums = [] }: IInMemoryAlbumListQuery): AlbumListQuery => async () => ({
  getAllAlbums: async () => ({ albums: existingAlbums }),
  addAlbumToTheList: async (album: IAlbumResponse) => (album)
})


export { createInMemoryAlbumListQuery }