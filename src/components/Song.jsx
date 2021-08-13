import React from "react";
import { addToActivePlaylist } from "../redux/actions/playlists.js"
import { connect } from "react-redux"
import { Button } from "react-bootstrap"

const mapStateToProps = (state) => state

const mapDispatchToProps = (dispatch) => ({
  addToActivePlaylist: (song) => dispatch(addToActivePlaylist(song))
})


const Song = (props) => (
  <div className="py-3 trackHover">
    <span className="card-title trackHover px-3" style={{ color: "white" }}>
      {props.track.title}
    </span>
    <small className="duration" style={{ color: "white" }}>
      {Math.floor(parseInt(props.track.duration) / 60)}:
      {parseInt(props.track.duration) % 60 < 10
        ? "0" + (parseInt(props.track.duration) % 60)
        : parseInt(props.track.duration) % 60}
    </small>
    <Button className="add-button" variant="success" onClick={() => props.addToActivePlaylist(props.track)}>+</Button>
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(Song);
