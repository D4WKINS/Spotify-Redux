export const addToActivePlaylist = (song) => {
    return {
        type: 'ADD_TO_ACTIVE_PLAYLIST',
        payload: song,
    }
}

export const removeFromActivePlaylist = (id) => ({
    type: 'REMOVE_FROM_ACTIVE_PLAYLIST',
    payload: id,
})