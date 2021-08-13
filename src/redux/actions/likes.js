import {LIKE_SONG, UNLIKE_SONG} from '../types/likes.js'
export const likeSong = (songId)=>{
    return{
        type: LIKE_SONG,
        payload: songId
        
    }
}

export const unlikeSong = (songId)=>{
    return{
        type: UNLIKE_SONG,
        payload: songId
        
    }
}




