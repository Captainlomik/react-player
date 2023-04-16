import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
} from "@fortawesome/free-solid-svg-icons";
import { SongModel } from "../models";

interface timeProps {
  currentTime: number;
  duration: number;
}

interface songProps {
  currentSong: SongModel;
  setCurrentSong: any;
  isPlaying: boolean;
  setIsPlaying: (play: boolean) => void;
  audioRef: any;
  songInfo: timeProps;
  setSongInfo: (info: timeProps) => void;
  songs: SongModel[];
}

export default function Player({
  currentSong,
  setCurrentSong,
  isPlaying,
  setIsPlaying,
  audioRef,
  songInfo,
  setSongInfo,
  songs,
}: songProps) {
  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current?.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current?.play();
      setIsPlaying(!isPlaying);
    }
  };

  //Преобразование минут
  const getTime = (time: number) => {
    if (time) {
      return (
        Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
      );
    } else {
      return "0:00";
    }
  };

  const dragHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    audioRef.current!.currentTime = +e.target.value;
    setSongInfo({ ...songInfo, currentTime: +e.target.value });
  };

  const skipTrackHandler = (direction: string) => {
    let currentIndex = songs.findIndex((song) => {
      return song.id === currentSong.id;
    });
    if (direction === "skip-forward") {
      setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    }
    if (direction === "skip-back") {
      if ((currentIndex - 1) % songs.length === -1) { 
        setCurrentSong(songs.at(-1))
        return
      }
        setCurrentSong(songs[(currentIndex - 1) % songs.length]);
        
    }
  };

  return (
    <div className="player">
      <div className="time-control">
        <p>{getTime(songInfo!.currentTime)}</p>
        <input
          type="range"
          name=""
          id=""
          min={0}
          max={songInfo.duration || "0:00"}
          value={songInfo.currentTime}
          onChange={dragHandler}
        />
        <p>{getTime(songInfo!.duration)}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon
          onClick={() => skipTrackHandler("skip-back")}
          className="skip-back"
          size="2x"
          icon={faAngleLeft}
        />
        <FontAwesomeIcon
          onClick={playSongHandler}
          className="play"
          size="2x"
          icon={isPlaying ? faPause : faPlay}
        />
        <FontAwesomeIcon
          onClick={() => skipTrackHandler("skip-forward")}
          className="skip-forward"
          size="2x"
          icon={faAngleRight}
        />
      </div>
    </div>
  );
}
