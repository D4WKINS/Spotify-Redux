import React from "react"
import { connect } from "react-redux"
import { likeSong, unlikeSong } from "../redux/actions/likes"
import { Button } from "react-bootstrap"
import { addToActivePlaylist } from "../redux/actions/playlists.js"

const mapStateToProps = (state) => state

const mapDispatchToProps = (dispatch) => ({
  addToActivePlaylist: (song) => dispatch(addToActivePlaylist(song)),
  likeSong: (songId) => dispatch(likeSong(songId)),
  unlikeSong: (songId) => dispatch(unlikeSong(songId)),
})

const Song = ({ track, likes, likeSong, unlikeSong, addToActivePlaylist, img }) => {
  return (
    <div className="py-3 trackHover">
      <span className="card-title trackHover px-3" style={{ color: "white" }}>
        {track.title}
      </span>
      {likes.includes(track.id) ? (
        <span className="badge badge-success" onClick={() => unlikeSong(track.id)}>
          Liked
        </span>
      ) : (
        <span className="badge badge-secondary" onClick={() => likeSong(track.id)}>
          Not Liked
        </span>
      )}
      <small className="duration" style={{ color: "white" }}>
        {Math.floor(parseInt(track.duration) / 60)}:
        {parseInt(track.duration) % 60 < 10
          ? "0" + (parseInt(track.duration) % 60)
          : parseInt(track.duration) % 60}
      </small>
      <Button
        className="add-button"
        variant="success"
        onClick={() => addToActivePlaylist({ ...track, img: img })}>
        +
      </Button>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Song)
