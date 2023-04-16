import React from "react";
import { SongModel } from "../models";

interface songProps {
  id: number;
  song: SongModel;
  songs: SongModel[];
  setCurrentSong: (song: SongModel) => void;
  audioRef: any;
  isPlaying: boolean;
  setSongs: (song: SongModel[]) => void;
}

export default function LibrarySong({
  song,
  songs,
  setCurrentSong,
  id,
  audioRef,
  isPlaying,
  setSongs,
}: songProps) {
  const songSelectHandler = async () => {
   await setCurrentSong(song);

    //Активная песня
    const newSongs = songs.map((song) => {
      if (song.id === id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });
 setSongs(newSongs);
    //Проверить играет ли музыка
    if(isPlaying) audioRef.current.play()
  };

  return (
    <div
      className={`library-song ${song.active ? "selected" : ""}`}
      onClick={songSelectHandler}
    >
      <img src={song.cover} alt={song.name}></img>
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
}
