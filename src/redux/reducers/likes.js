import {initialState} from '../store/index.js'

const likeSongReducer = (state = initialState.likes, action) => {
    switch(action.type){
        case 'LIKE_SONG':
            let songLiked = state.findIndex((id) => id === action.payload)

      let newLikedSongs = [...state]
      if (songLiked === -1) {
        newLikedSongs.push(action.payload)
      } 

      return newLikedSongs

    case 'UNLIKE_SONG':
   
        const newLikedSongsArr= state.filter((id) => id !== action.payload)

      return newLikedSongsArr
    default:
      //   console.log('NOT RECOGNIZED ACTION!')
      return state
    }
}



export default likeSongReducer