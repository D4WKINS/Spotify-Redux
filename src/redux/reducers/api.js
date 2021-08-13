import { initialState } from "../store"

const apiReducer = (state = initialState.api, action) => {
  switch (action.type) {
    case "FETCH_SEARCH":
      return {
        ...state,
        search: { ...state.search, ...action.payload },
        query: Object.keys(action.payload)[0],
      }

    case "FETCH_ARTIST":
      const newArtist = {}
      newArtist[action.payload.id] = action.payload

      return {
        ...state,
        artists: { ...state.artists, ...newArtist },
      }

    case "FETCH_ALBUM":
      const newAlbum = {}
      newAlbum[action.payload.id] = action.payload

      return {
        ...state,
        albums: { ...state.albums, ...newAlbum },
      }

    default:
      return state
  }
}

export default apiReducer
