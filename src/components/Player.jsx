import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import PlayerCard from "./PlayerCard.jsx"
import "./player.css"

const Player = (props) => {
  return (
    <Container fluid className="footer">
      <footer>
        <Row>
          <Col xs={4}>
            <PlayerCard />
          </Col>
          <Col
            xs={4}
            className="d-flex align-items-center justify-content-center flex-column">
            <Row className="justify-content-center align-content-center">
              <Col className="player-buttons justify-content-between">
                <IconButton class="fas fa-random" />
                <IconButton class="fas fa-step-backward wider-icon" />
                <button className="play-button">
                  <i className="fas fa-play"></i>
                </button>
                <IconButton class="fas fa-step-forward wider-icon" />
                <IconButton class="fas fa-redo-alt" />
              </Col>
            </Row>
            <Row className="w-100 timeline">
              <Col className="d-flex align-items-center">
                <div className="player-time">0:00</div>
                <div className="col px-2">
                  <div className="player-bar"></div>
                </div>
                <div className="player-time">0:00</div>
              </Col>
            </Row>
          </Col>
          <Col
            xs={4}
            className="d-flex justify-content-end align-items-center player-right-section">
            <IconButton class="fas fa-align-justify" />
            <IconButton class="fas fa-desktop" />
            <div className="d-flex align-items-center volume-bar">
              <IconButton class="fas fa-volume-up" />
              <div className="player-volume"></div>
            </div>
          </Col>
        </Row>
      </footer>
    </Container>
  )
}

export default Player

const IconButton = (props) => {
  return (
    <button>
      <i className={props.class}></i>
    </button>
  )
}
