import { createStore } from "../../../store"
import { selectors, useCases } from ".."
import { retrieveAlbumListSUT } from "../builder/sut-builder"

describe('retrieve a list of albums', () => {
  test('should return an empty list of album', () => {
    // arrange ==> préparation du store
    const { selectAllAlbums } = retrieveAlbumListSUT().withoutAlbums().build()
    // assert ==> selector = expected
    expect(selectAllAlbums()).toEqual({ albums: [] })
  })

  test('should return a list of album', () => {
    // arrange ==> préparation du store
    const { selectAllAlbums, retireveAlbumList } = retrieveAlbumListSUT()
      .withAlbums([
        { id: 'id1', name: 'album1' },
        { id: 'id2', name: 'album2' },
      ])
      .build()
    // act ==> dispatch une action
    retireveAlbumList()
    // assert ==> selector = expected
    // const EXPECTED_ALBUMS = [FIRST_ALBUM, SECOND_ALBUM]
    const EXPECTED_ALBUMS = [
      { id: 'id1', name: 'album1' },
      { id: 'id2', name: 'album2' },
    ]
    expect(selectAllAlbums()).toEqual({ albums: EXPECTED_ALBUMS })
  })
})
export {}