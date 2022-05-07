import { selectors, useCases } from ".."
import { createStore } from "../../../store"
import { IAlbumResponse } from "../../use-cases"

interface SUTProps {
  albums?: IAlbumResponse[]
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
    build(){
      const store = createStore({ existingAlbums: props.albums })
      const selectAllAlbums = () => selectors.selectAllAlbums(store.getState())
      const retireveAlbumList = () => store.dispatch(useCases.retireveAlbumList())

      return { selectAllAlbums, retireveAlbumList }
    }
  }
}

export { retrieveAlbumListSUT }