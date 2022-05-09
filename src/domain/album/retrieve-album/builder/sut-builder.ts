import { selectors, useCases } from ".."
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

      console.log('build ====>', props)
      
      const store = createStore({ albumListQuery })
      
      console.log('store created ====>', store.getState())
      const selectAllAlbums = () => selectors.selectAllAlbums(store.getState())
      const retrieveAlbumList = () => store.dispatch(useCases.retrieveAlbumList())
      const saveAlbumToTheList = (newAlbum: IAlbumResponse) => store.dispatch(useCases.saveAlbumToTheList(newAlbum))

      return { selectAllAlbums, retrieveAlbumList, saveAlbumToTheList }
    }
  }
}

export { retrieveAlbumListSUT }