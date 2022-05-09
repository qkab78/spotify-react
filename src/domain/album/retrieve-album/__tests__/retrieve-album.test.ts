import { retrieveAlbumListSUT } from "../builder/sut-builder"

describe('retrieve a list of albums', () => {
  test('should return an empty list of album', () => {
    // arrange ==> préparation du store
    const { selectAllAlbums } = retrieveAlbumListSUT().withoutAlbums().build()
    // assert ==> selector = expected
    expect(selectAllAlbums()).toEqual({ albums: [] })
  })

  test('should return a list of album', async () => {
    // arrange ==> préparation du store
    const { selectAllAlbums, retrieveAlbumList } = retrieveAlbumListSUT()
      .withAlbums([
        { id: 'id1', name: 'album1' },
        { id: 'id2', name: 'album2' },
      ])
      .build()
    // act ==> dispatch une action
    await retrieveAlbumList()
    // assert ==> selector = expected
    const EXPECTED_ALBUMS = [
      { id: 'id1', name: 'album1' },
      { id: 'id2', name: 'album2' },
    ]
    expect(selectAllAlbums()).toEqual({ albums: EXPECTED_ALBUMS })
  })

  test('should save an album to the list', async () => {
    // Arrange ==> préparation du store
    const { selectAllAlbums, retrieveAlbumList, saveAlbumToTheList } = retrieveAlbumListSUT()
      .withAlbums([{ id: 'id1', name: 'album 1'}, { id: 'id2', name: 'album 2'}])
      .build()

    // ACT ==> dispatch une action
    await retrieveAlbumList()
    await saveAlbumToTheList({ id: 'id3', name: 'album 3'})
    // Assert ==> selector = expected
    expect(selectAllAlbums().albums).toHaveLength(3)
    expect(selectAllAlbums()).toEqual({ albums: [
      { id: 'id1', name: 'album 1'},
      { id: 'id2', name: 'album 2'},
      { id: 'id3', name: 'album 3'},
    ] })
  })
  test.todo('should remove an album from the list')
  test.todo('should remove multiple albums from the list')
})
export {}