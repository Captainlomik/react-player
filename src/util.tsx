import React from 'react'

export const playAudio = (isPlaying:boolean, audioRef: any) => {
    if (isPlaying) {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise.then((audio: any) => {
            audioRef.current.play();
          });
        }
      }
}
