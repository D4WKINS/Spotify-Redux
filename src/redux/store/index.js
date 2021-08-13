import { createStore, combineReducers, compose, applyMiddleware } from "redux"

import thunk from "redux-thunk"
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const initialState = {
    playlists: {
        activePlaylist: [],
        likedPlaylist: [],
    },

    api: {
        albums: {},
        artists: {},
        songs: {},
    },
}

const mainReducer = combineReducers({})

export const configureStore = createStore(
    mainReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
)
