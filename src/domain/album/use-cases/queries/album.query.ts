import { IAlbumResponse } from "../retrieve-album"

const createAlbumListResult = ({ albums }: { albums: IAlbumResponse[] }) => ({ albums })
const saveAlbumToTheListResult = (album?: IAlbumResponse) => album

export type AlbumListResult = ReturnType<typeof createAlbumListResult>
export type SaveAlbumToTheListResult = ReturnType<typeof saveAlbumToTheListResult>

export interface AlbumListQuery {
  (): Promise<AlbumListResult>
}

export interface SaveAlbumToTheListQuery {
  (album?: IAlbumResponse): Promise<SaveAlbumToTheListResult>
}