import { selectors, useCases } from ".."
import { createInMemoryAlbumListQuery } from "../../album/adapters/album-list-query/in-memory"
import { createStore } from "../../store"
import { createInMemoryAuthQuery } from "../adapters/auth-query/in-memory"
import { IAuth } from "../entities/auth"

const authSUT = () => {
  return {
    build(){
      const albumListQuery = createInMemoryAlbumListQuery({ existingAlbums: [] })
      const authQuery = createInMemoryAuthQuery()

      const store = createStore({ albumListQuery, authQuery })

      const authenticateUser = (authInfos: IAuth) => store.dispatch(useCases.authenticateUser(authInfos))
      const selectAuthInfos = () => (selectors.selectAuthInfos(store.getState()))

      return { authenticateUser, selectAuthInfos }
    }
  }
}

export { authSUT }