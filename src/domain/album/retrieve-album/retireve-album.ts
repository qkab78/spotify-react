import { RootState } from "../../store"
import * as useCases from '../use-cases'

const selectors = {
  selectAllAlbums: (state: RootState) => state
}

export { selectors, useCases }