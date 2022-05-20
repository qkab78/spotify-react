import { createInMemoryAlbumListQuery } from "./album/adapters/album-list-query/in-memory"
import { albumsSlice, initialState as albumInitialState } from "./album/album-slice"
import { createInMemoryAuthQuery } from "./auth/adapters/auth-query/in-memory"
import { authSlice, initialState as authInitialState } from "./auth/auth.slice"
import { Auth } from "./auth/entities/auth"
import { CreatedStore, createStore, RootState } from "./store"

type TestStoreProps = Partial<CreatedStore> & {
    authenticatedUser?: Auth
}

const createTestStore = ({
    ...storeProps
}: TestStoreProps) => {
    const preloadedState: RootState = {
        [authSlice.name]: authInitialState,
        [albumsSlice.name]: albumInitialState
    }

    return createStore({
        preloadedState,
        authQuery: createInMemoryAuthQuery(),
        albumListQuery: createInMemoryAlbumListQuery(),
        ...storeProps
    })
}

export { createTestStore }