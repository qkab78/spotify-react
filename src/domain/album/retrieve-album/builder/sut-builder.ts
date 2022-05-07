import { selectors, useCases } from ".."
import { createStore } from "../../../store"
import { createInMemoryQuestionListQuery } from "../../adapters/album-list-query/in-memory"
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
      const albumListQuery = createInMemoryQuestionListQuery({ existingAlbums: props.albums })
      const store = createStore({ albumListQuery })
      const selectAllAlbums = () => selectors.selectAllAlbums(store.getState())
      const retireveAlbumList = () => store.dispatch(useCases.retireveAlbumList())

      return { selectAllAlbums, retireveAlbumList }
    }
  }
}

export { retrieveAlbumListSUT }