import { useState, createContext } from 'react';
import { Track, Album } from '../types';
import Visualizer from './VisualizerComponents/Visualizer';
import Player from './PlayerComponents/Player';
import MusicSideBar from './MusicSideBarComponents/MusicSideBar';
import NavBar from './NavBarComponents/MainNavBar';
import { getTracks } from '../API/ApiCalls';


import '../loader.css'
import AlbumSideBar from './MusicSideBarComponents/AlbumSideBar';


export interface AppContextValues {
    tracks: Track[],
    albums: Album[],
    currentTrackIndex: number
    setCurrentTrackIndex?: React.Dispatch<React.SetStateAction<number>>,
    setTracks?: React.Dispatch<React.SetStateAction<Track[]>>,
    setErrorState?: React.Dispatch<React.SetStateAction<boolean>>,
    setAlbums?: React.Dispatch<React.SetStateAction<Album[]>>,
}

export const AppContext = createContext<AppContextValues>({tracks: [], albums: [], currentTrackIndex: 0});

function AppContextComponent() {

  const [tracks, setTracks] = useState<Track[]>([]);
  const [albums, setAlbums] = useState<Album[]>([]);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [errorState, setErrorState] = useState(false);
  const [isAlbumMode, setIsAlbumMode] = useState(true);
  const [queue, setQueue] = useState<Track[]>([]);


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
    
    <>
      <NavBar />
      <AppContext.Provider value = {{tracks, albums, currentTrackIndex, setCurrentTrackIndex, setTracks, setErrorState, setAlbums }}>
        <div className='grid-1-item visualizer'>
          <Visualizer />
        </div>
        <div className='grid-1-item player-sidebar-container'>
          <button onClick={() => setIsAlbumMode(!isAlbumMode)}>
            Swap
          </button>
          {isAlbumMode ? <AlbumSideBar/> : <MusicSideBar/>}
          
        </div>
        <div className='grid-1-item player-container'>
          <Player />
        </div>
      </AppContext.Provider>
    </>

  )
}

export default AppContextComponent