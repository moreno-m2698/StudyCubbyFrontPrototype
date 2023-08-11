import { useState, createContext, useEffect } from 'react';
import { Track } from '../types';
import Visualizer from './VisualizerComponents/Visualizer';
import Player from './PlayerComponents/Player';
import MusicSideBar from './MusicSideBarComponents/MusicSideBar';
import NavBar from './NavBarComponents/MainNavBar';
import { getTracks } from '../API/ApiCalls';


import '../loader.css'


export interface TrackContext {
    tracks: Track[],
    currentTrackIndex: number
    setCurrentTrackIndex?: React.Dispatch<React.SetStateAction<number>>
  }

export const TrackContext = createContext<TrackContext>({tracks: [],currentTrackIndex: 0});

function TrackContextComponents() {

  const [tracks, setTracks] = useState<Track[]>([])
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [errorState, setErrorState] = useState(false);

  useEffect(() => {
    
    (async() => {
      if (tracks.length === 0) {
        
        const response = await getTracks()
        const tracks = response.tracks
        const errorState= response.errorState

        setTracks(tracks)
        setErrorState(errorState)
      }
    })();
  }, [])


  const getButton = (content: string) => { //Button here for testing purposes, hopefully we can get the app to autopopulate on launch
    return (
      <>
        <button 
            className='blue-btn'
            onClick={() => getTracks()}      
        >{content}</button>
      </>
      )
    }

    if (errorState) {
      return (
        <div className='vert-flex'>
          <h1>Could not get songs</h1>
          {getButton('Try Again')}
        </div>

      )
    }

  return (
    (tracks.length === 0) ? <div className='lds-hourglass'>

    </div>:
    <>
      <NavBar />
      <TrackContext.Provider value = {{tracks, currentTrackIndex, setCurrentTrackIndex }}>
        <div className='grid-1-item visualizer'>
          <Visualizer />
        </div>
        <div className='grid-1-item music-sidebar-container'>
          <MusicSideBar />
        </div>
        <div className='grid-1-item player-container'>
          <Player />
        </div>
      </TrackContext.Provider>
    </>

  )
}

export default TrackContextComponents