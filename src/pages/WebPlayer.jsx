import "../assets/css/player.scss"
import Museum from "../assets/images/muzej.jpg"
import { useState } from "react";

const WebPlayer = () => {
  const [trackName, setTrackName] = useState("Ked idzeš kolo nas");
  const [author, setAuthor] = useState("unknown");
  
  return (
    <div className='player-container'>
      <section className="player">
        <h1>Web Player</h1>
        <div className="button-row">
          <button className='play-button'>Play</button>
          <button className='mute-button'>Mute</button>
        </div>
        <section className="song-info">
          <h1>{trackName}</h1>
          <h3>{author}</h3>
          <img src={Museum} />
        </section>
      </section>
    </div>
  )
}

export default WebPlayer