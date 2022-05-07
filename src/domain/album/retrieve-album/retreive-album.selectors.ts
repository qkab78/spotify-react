import { RootState } from '../../store'
import { albumEntityAdapter } from '../album-slice'

const albumsSelectors = albumEntityAdapter.getSelectors<RootState>((state) => state.albums)

const selectAllAlbums = (state: RootState) => {
  const albums = albumsSelectors.selectAll(state)
  return { albums }
}

export { selectAllAlbums }