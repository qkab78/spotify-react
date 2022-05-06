import { createAction } from "@reduxjs/toolkit"


const retireveAlbumList = createAction<{
  albums: Array<{ id: string, name: string }>
}>('albums/retireveAlbumList')

export { retireveAlbumList }