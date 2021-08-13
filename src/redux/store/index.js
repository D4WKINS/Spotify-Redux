import { createStore, combineReducers, compose, applyMiddleware } from "redux"
import playlistReducer from "../reducers/playlists"
import apiReducer from "../reducers/api"
import likesReducer from "../reducers/likes"

import thunk from "redux-thunk"
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const initialState = {
  playlists: {
    activePlaylist: [],
  },

  likes: [],

  api: {
    albums: {},
    artists: {},
    search: {},
    query: "",
  },
}

const mainReducer = combineReducers({
  playlists: playlistReducer,
  api: apiReducer,
  likes: likesReducer,
})

export const configureStore = createStore(
  mainReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
)
