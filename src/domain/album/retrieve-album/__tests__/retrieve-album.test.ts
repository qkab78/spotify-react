import { IAlbumResponse } from "../../use-cases"
import { retrieveAlbumListSUT } from "../builder/sut-builder"

describe('retrieve a list of albums', () => {
  let AN_ALBUM: IAlbumResponse
  let ANOTHER_ALBUM: IAlbumResponse

  beforeEach(() => {
    AN_ALBUM = { id: 'id1', name: 'album 1' }
    ANOTHER_ALBUM = { id: 'id2', name: 'album 2' }
  })
  test('should return an empty list of album', () => {
    // arrange ==> préparation du store
    const { selectAllAlbums } = retrieveAlbumListSUT().withoutAlbums().build()
    // assert ==> selector = expected
    expect(selectAllAlbums()).toEqual({ albums: [] })
  })

  test('should return a list of album', async () => {
    // arrange ==> préparation du store
    const { selectAllAlbums, retrieveAlbumList } = retrieveAlbumListSUT()
      .withAlbums([AN_ALBUM, ANOTHER_ALBUM])
      .build()
    // act ==> dispatch une action
    await retrieveAlbumList()
    // assert ==> selector = expected
    const EXPECTED_ALBUMS = [
      { id: 'id1', name: 'album 1' },
      { id: 'id2', name: 'album 2' },
    ]
    expect(selectAllAlbums()).toEqual({ albums: EXPECTED_ALBUMS })
  })

  test('should save an album to the list', async () => {
    // Arrange ==> préparation du store
    const { selectAllAlbums, retrieveAlbumList, saveAlbumToTheList } = retrieveAlbumListSUT()
      .withAlbums([AN_ALBUM, ANOTHER_ALBUM])
      .build()

    // ACT ==> dispatch une action
    await retrieveAlbumList()
    await saveAlbumToTheList({ id: 'id3', name: 'album 3'})
    // Assert ==> selector = expected
    const EXPECTED_ALBUMS = [
      { id: 'id1', name: 'album 1'},
      { id: 'id2', name: 'album 2'},
      { id: 'id3', name: 'album 3'},
    ]
    expect(selectAllAlbums().albums).toHaveLength(3)
    expect(selectAllAlbums()).toEqual({ albums: EXPECTED_ALBUMS })
  })
  test('should remove an album from the list', async () => {
    const { selectAllAlbums, retrieveAlbumList, removeAlbumFromTheList } = retrieveAlbumListSUT()
      .withAlbums([AN_ALBUM, ANOTHER_ALBUM])
      .build()

    await retrieveAlbumList()
    await removeAlbumFromTheList('id1')

    expect(selectAllAlbums().albums).toHaveLength(1)
    expect(selectAllAlbums()).toEqual({ albums: [{ id: 'id2', name: 'album 2' }] })
  })
  test('should remove multiple albums from the list', async () => {
    const { selectAllAlbums, retrieveAlbumList, removeAlbumsFromTheList } = retrieveAlbumListSUT()
      .withAlbums([AN_ALBUM, ANOTHER_ALBUM])
      .build()
    
    await retrieveAlbumList()
    await removeAlbumsFromTheList(['id1', 'id2'])

    expect(selectAllAlbums().albums).toHaveLength(0)
    expect(selectAllAlbums()).toEqual({ albums: [] })
  })
})
export {}