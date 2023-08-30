import { useState, createContext } from 'react';
import { Track, Album, PlayerTracks } from '../types';
import Visualizer from './VisualizerComponents/Visualizer';
import Player from './PlayerComponents/Player';
import MusicSideBar from './MusicSideBarComponents/MusicSideBar';
import NavBar from './NavBarComponents/MainNavBar';
import { getTracks } from '../API/ApiCalls';

import '../CSS/appContainer.css'
import '../CSS/loader.css'
import AlbumSideBar from './MusicSideBarComponents/AlbumSideBar';


export interface AppContextValues {
    tracks: Track[],
    albums: Album[],
    currentTrackIndex: number
    playerTracks: PlayerTracks
    setCurrentTrackIndex?: React.Dispatch<React.SetStateAction<number>>,
    setTracks?: React.Dispatch<React.SetStateAction<Track[]>>,
    setErrorState?: React.Dispatch<React.SetStateAction<boolean>>,
    setAlbums?: React.Dispatch<React.SetStateAction<Album[]>>,
    setPlayerTracks?: React.Dispatch<React.SetStateAction<PlayerTracks>>
}

export const AppContext = createContext<AppContextValues>({tracks: [], albums: [], currentTrackIndex: 0, playerTracks: {id: 'none', tracks: []}});

function AppContextComponent() {
  
  const placeholderAlbum: Album = {
    artist: 'artist',
    id: 1,
    title: "album title",
    image: "https://cdn.dribbble.com/users/659193/screenshots/3022045/sad_coffee_dribbble.png",
    queueId: "a1",
    tracks: [
      {
        albumId: 1,
        artist: 'artist',
        id: 1,
        index: 0,
        title: 'song title'

      }
    ]
  }

  const placeholderTracks: Track = {
    albumId: 1,
    artist: 'artist',
    id: 1,
    index: 0,
    title: 'song title',
    image: 'https://cdn.dribbble.com/users/659193/screenshots/3022045/sad_coffee_dribbble.png'

  }



  const [tracks, setTracks] = useState<Track[]>([placeholderTracks]);
  const [albums, setAlbums] = useState<Album[]>([placeholderAlbum]);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [errorState, setErrorState] = useState(false);
  const [isAlbumMode, setIsAlbumMode] = useState(true);
  const [playerTracks, setPlayerTracks] = useState<PlayerTracks>({id: 'none', tracks: []});


 



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

  const modeSelector = (playerMode:boolean) => {
    if (!playerMode) {
      //We are in album mode

    } else {
    }
    setIsAlbumMode(!playerMode)
  }


  
  return (
    <>
      <AppContext.Provider value = {{tracks, albums, currentTrackIndex, playerTracks, setCurrentTrackIndex, setTracks, setErrorState, setAlbums, setPlayerTracks }}>
        <div className='grid-1-item visualizer-container'>
          <Visualizer />
        </div>
        <div className='grid-1-item player-sidebar-container'>
          <button onClick={() => modeSelector(isAlbumMode)}>
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