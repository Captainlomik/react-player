import React from 'react'
import { SongModel } from '../models'

interface songProps{
    currentSong:SongModel
}


export default function Song({currentSong} : songProps) {
  return (
      <div className="song-container">
          <img src={currentSong.cover} alt={currentSong.name}></img>
          <h2>{currentSong.name}</h2>
          <h3>{currentSong.artist}</h3>
    </div>
  )
}
