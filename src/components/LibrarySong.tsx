import React from "react";
import { SongModel } from "../models";

interface songProps {
  song: SongModel;
}

export default function LibrarySong({ song }: songProps) {
  return (
    <div className="library-song">
      <img src={song.cover} alt={song.name}></img>
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
}
