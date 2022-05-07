import { selectors, useCases } from ".."
import { createStore } from "../../../store"
import { AlbumsState } from "../../album-slice"

interface SUTProps {
  albums?: AlbumsState
}

const retrieveAlbumListSUT = (props: SUTProps = {}) => {
  return {
    withoutAlbums() {
      return retrieveAlbumListSUT({
        ...props,
        albums: []
      })
    },
    withAlbums(albums: AlbumsState) {
      return retrieveAlbumListSUT({ ...props, albums })
    },
    build(){
      const store = createStore()
      const selectAllAlbums = () => selectors.selectAllAlbums(store.getState())
      const retireveAlbumList = () => store.dispatch(useCases.retireveAlbumList({
        albums: props.albums || []
      }))

      return { selectAllAlbums, retireveAlbumList }
    }
  }
}

export { retrieveAlbumListSUT }