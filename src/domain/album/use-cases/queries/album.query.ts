import { IAlbumResponse } from "../retrieve-album"

const createAlbumListResult = ({ albums }: { albums: IAlbumResponse[] }) => ({ albums })
const saveAlbumToTheListResult = (album: IAlbumResponse) => album

export type AlbumListResult = ReturnType<typeof createAlbumListResult>
export type SaveAlbumToTheListResult = ReturnType<typeof saveAlbumToTheListResult>

export type AlbumListQuery = () => Promise<{
  getAllAlbums: () => Promise<AlbumListResult>
  addAlbumToTheList: (album: IAlbumResponse) => Promise<SaveAlbumToTheListResult>
  removeAlbumFromTheList: (albumId: string) => Promise<string>
}>