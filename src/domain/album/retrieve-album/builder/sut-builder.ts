import { selectors, useCases } from ".."
import { createInMemoryAuthQuery } from "../../../auth/adapters/auth-query/in-memory"
import { createStore } from "../../../store"
import { createInMemoryAlbumListQuery } from "../../adapters/album-list-query/in-memory"
import { IAlbumResponse } from "../../use-cases"

interface SUTProps {
  albums?: IAlbumResponse[]
  newAlbum?: IAlbumResponse
}

const retrieveAlbumListSUT = (props: SUTProps = {}) => {
  return {
    withoutAlbums() {
      return retrieveAlbumListSUT({
        ...props,
        albums: []
      })
    },
    withAlbums(albums: IAlbumResponse[]) {
      return retrieveAlbumListSUT({ ...props, albums })
    },
    addAlbum(album: IAlbumResponse) {
      return retrieveAlbumListSUT({ ...props, newAlbum: album })
    },
    build(){      
      const albumListQuery = createInMemoryAlbumListQuery({ existingAlbums: props.albums })
      const authQuery = createInMemoryAuthQuery()
      
      const store = createStore({ albumListQuery, authQuery })
      
      const selectAllAlbums = () => selectors.selectAllAlbums(store.getState())
      const retrieveAlbumList = () => store.dispatch(useCases.retrieveAlbumList())
      const saveAlbumToTheList = (newAlbum: IAlbumResponse) => store.dispatch(useCases.saveAlbumToTheList(newAlbum))
      const removeAlbumFromTheList = (albumId: string) => store.dispatch(useCases.removeAlbumFromTheList(albumId))
      const removeAlbumsFromTheList = (albumIds: string[]) => store.dispatch(useCases.removeAlbumsFromTheList(albumIds))

      return { selectAllAlbums, retrieveAlbumList, saveAlbumToTheList, removeAlbumFromTheList, removeAlbumsFromTheList }
    }
  }
}

export { retrieveAlbumListSUT }