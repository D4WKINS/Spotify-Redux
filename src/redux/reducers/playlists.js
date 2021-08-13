import { initialState } from '../store/index.js'

const activePlaylistReducer = (state = initialState.playlists, action) => {
    switch (action.type) {
        case 'ADD_TO_ACTIVE_PLAYLIST':

            let activePlaylist = [...state.activePlaylist]
            activePlaylist.push(action.payload)
            return {
                ...state,
                activePlaylist: activePlaylist,
            }
        case 'REMOVE_FROM_PLAYLIST':
            let newActivePlaylist = [...state.activePlaylist]
            let newActivePlaylistArray = []
            if (newActivePlaylist.some((e) => e.id === action.payload)) {
                newActivePlaylistArray = newActivePlaylist.filter((s) => s.id !== action.payload)
                return {
                    ...state,
                    activePlaylist: newActivePlaylistArray,
                }
            } else {
                return {
                    ...state
                }
            }

        default:
            return state
    }
}

export default activePlaylistReducer