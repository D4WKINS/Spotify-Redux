import React from "react"
import { connect } from "react-redux"
import { likeSong, unlikeSong } from "../redux/actions/likes"

const mapStateToProps = (state) => ({
  activeSong: state.playlists.activePlaylist[state.playlists.activePlaylist.length - 1],
  likes: state.likes,
})

const mapDispatchToProps = (dispatch) => ({
  likeSong: (songId) => dispatch(likeSong(songId)),
  unlikeSong: (songId) => dispatch(unlikeSong(songId)),
})

const PlayerCard = (props) => {
  return props.activeSong === undefined ? (
    <></>
  ) : (
    <div className="player-left d-flex align-items-center">
      <img src={props.activeSong?.img} alt="" className="p-0" />
      <div className="d-flex flex-column d-none d-sm-flex">
        <div className="player-song-title text-white">{props.activeSong?.title}</div>
        <div className="player-author">{props.activeSong?.artist.name}</div>
      </div>
      {props.likes.includes(props.activeSong?.id) ? (
        <i
          className="far fa-heart d-none d-md-flex heart-icon red-heart"
          onClick={() => props.unlikeSong(props.activeSong?.id)}></i>
      ) : (
        <i
          className="far fa-heart d-none d-md-flex heart-icon"
          onClick={() => props.likeSong(props.activeSong?.id)}></i>
      )}
      <i className="fas fa-tv d-none d-md-flex"></i>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerCard)
