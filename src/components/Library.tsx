import React from "react";
import { SongModel } from "../models";
import LibrarySong from "./LibrarySong";

export default function Library({
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
  libraryStatus,
}: any) {
  return (
    <div className={`library ${libraryStatus ? "active-library" : ""}  `}>
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song: SongModel) => {
          return (
            <LibrarySong
              song={song}
              setCurrentSong={setCurrentSong}
              songs={songs}
              id={song.id}
              key={song.id}
              audioRef={audioRef}
              isPlaying={isPlaying}
              setSongs={setSongs}
            />
          );
        })}
      </div>
    </div>
  );
}
