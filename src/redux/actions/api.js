export const fetchSearch = (query) => {
  return async (dispatch, getState) => {
    const state = getState()
    if (query in state.api.search) {
      dispatch({
        type: "FETCH_SEARCH",
        payload: { [query]: state.api.search[query] },
      })
    } else {
      try {
        let resp = await fetch(
          "https://striveschool-api.herokuapp.com/api/deezer/search?q=" + query,
          {
            method: "GET",
            headers: new Headers({
              "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
              "X-RapidAPI-Key": "9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0",
            }),
          }
        )
        if (resp.ok) {
          let search = await resp.json()
          dispatch({
            type: "FETCH_SEARCH",
            payload: { [query]: search },
          })
        } else {
          console.log("error")
        }
      } catch (error) {
        console.log(error)
      }
    }
  }
}

export const fetchAlbum = (id) => {
  return async (dispatch, getState) => {
    try {
      let resp = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/album/" + id,
        {
          method: "GET",
          headers: new Headers({
            "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
            "X-RapidAPI-Key": "9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0",
          }),
        }
      )
      if (resp.ok) {
        let albums = await resp.json()
        dispatch({
          type: "FETCH_ALBUM",
          payload: albums,
        })
      } else {
        console.log("error")
      }
    } catch (error) {
      console.log(error)
    }
  }
}

export const fetchArtist = (id) => {
  return async (dispatch, getState) => {
    try {
      let resp = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/artist/" + id,
        {
          method: "GET",
          headers: new Headers({
            "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
            "X-RapidAPI-Key": "9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0",
          }),
        }
      )
      if (resp.ok) {
        let artist = await resp.json()
        dispatch({
          type: "FETCH_ARTIST",
          payload: artist,
        })
      } else {
        console.log("error")
      }
    } catch (error) {
      console.log(error)
    }
  }
}
