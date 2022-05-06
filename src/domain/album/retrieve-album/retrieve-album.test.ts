import { createStore } from "../../store"
import { selectors, useCases } from "./retireve-album"

describe('retrieve a list of albums', () => {
  test('should return an empty list of album', () => {
    // arrange ==> préparation du store
    const store = createStore()
    // assert ==> selector = expected
    expect(selectors.selectAllAlbums(store.getState())).toEqual({ albums: [] })
  })

  test('should return a list of album', () => {
    // arrange ==> préparation du store
    const store = createStore()
    // act ==> dispatch une action
    store.dispatch(useCases.retireveAlbumList({
      albums: [
        { id: 'id1', name: 'album1' },
        { id: 'id2', name: 'album2' },
      ]
    }))
    // assert ==> selector = expected
    // const EXPECTED_ALBUMS = [FIRST_ALBUM, SECOND_ALBUM]
    const EXPECTED_ALBUMS = [
      { id: 'id1', name: 'album1' },
      { id: 'id2', name: 'album2' },
    ]
    expect(selectors.selectAllAlbums(store.getState())).toEqual({ albums: EXPECTED_ALBUMS })
  })
})
export {}