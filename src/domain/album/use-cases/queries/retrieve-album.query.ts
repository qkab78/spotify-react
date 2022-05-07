import { IAlbumResponse } from "../retrieve-album"

const createQuestionListResult = ({ albums }: { albums: IAlbumResponse[] }) => ({
  albums
})

export type AlbumListResult = ReturnType<typeof createQuestionListResult>

export interface AlbumListQuery {
  (): Promise<AlbumListResult>
}