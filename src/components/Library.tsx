import React from 'react'
import { SongModel } from '../models'
import LibrarySong from './LibrarySong'


export default function Library({songs}:any) {
  return (
      <div className="library">
          <h2>Library</h2>
          <div className="library-songs">
              {songs.map((song:SongModel) => {
                 return <LibrarySong song = {song}/>
              })}
          </div>
    </div>
  )
}
