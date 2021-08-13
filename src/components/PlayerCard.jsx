import React from "react"
import { connect } from "react-redux"

// const mapStateToProps = (state) => ({
//   activeSong: state.playlists.activePlaylist[state.playlists.activePlaylist.length - 1],
// })

const mapStateToProps = (state) => state

const PlayerCard = (props) => {
  console.log(props)
  return (
    <div
      className={`player-left d-flex align-items-center ${
        !props.activeSong && "d-none"
      }`}>
      <img src={props.activeSong?.img} alt="" className="p-0" />
      <div className="d-flex flex-column d-none d-sm-flex">
        <div className="player-song-title text-white">{props.activeSong?.title}</div>
        <div className="player-author">{props.activeSong?.author}</div>
      </div>
      <i className="far fa-heart d-none d-md-flex heart-icon"></i>
      <i className="fas fa-tv d-none d-md-flex"></i>
    </div>
  )
}

export default connect(mapStateToProps, {})(PlayerCard)
