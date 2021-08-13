import React from "react";
import {connect} from "react-redux";
import { likeSong, unlikeSong } from "../redux/actions/likes";
import {useEffect} from "react";

const Song = ({ track, likes, likeSong, unlikeSong }) => {

  return(<div className="py-3 trackHover">
    <span className="card-title trackHover px-3" style={{ color: "white" }}>
      {track.title}
    </span>
    {likes.includes(track.id) ? <span className="badge badge-success" onClick={()=>unlikeSong(track.id)}>Liked</span> : <span className="badge badge-secondary" onClick={() => likeSong(track.id)}>Not Liked</span>}
    <small className="duration" style={{ color: "white" }}>
      {Math.floor(parseInt(track.duration) / 60)}:
      {parseInt(track.duration) % 60 < 10
        ? "0" + (parseInt(track.duration) % 60)
        : parseInt(track.duration) % 60}
    </small>
  </div>)
};

const mapStateToProps = state => state

const mapDispatchToProps = dispatch => {
    return {
        likeSong:(songId)=> dispatch(likeSong(songId)),
        unlikeSong:(songId)=> dispatch(unlikeSong(songId))
    }
  }


export default connect(mapStateToProps,mapDispatchToProps)(Song)
