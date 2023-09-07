import { useState, createContext } from 'react';
import { Track, Album, PlayerTracks } from '../types';
import Visualizer from './VisualizerComponents/Visualizer';
import Player from './PlayerComponents/Player';
import { getTracks } from '../API/ApiCalls';
import '../CSS/content.css';
import '../CSS/sidebar.css'
import '../CSS/player.css'
//import '../CSS/appContextContainer.css'
//import '../CSS/loader.css'
import PlayerSidebar from './MusicSideBarComponents/PlayerSidebar';


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
  
  const placeholderAlbums: Album[] = [{
    artist: 'artist 1',
    id: 1,
    title: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error at eius voluptates illo magnam numquam, laudantium esse autem iure neque aliquam placeat repellat modi, ullam natus sed magni accusantium dolore.",
    image: "https://cdn.dribbble.com/users/659193/screenshots/3022045/sad_coffee_dribbble.png",
    queueId: "a1",
    tracks: [
      {
        albumId: 1,
        artist: 'artist',
        id: 1,
        index: 0,
        title: 'song title'

      },
      {
        albumId: 1,
        artist: 'artist',
        id: 2,
        index: 1,
        title: 'song title'

      }
    ]
  },

  {artist: 'artist 2',
    id: 2,
    title: "album title 2",
    image: "https://cdn.dribbble.com/users/659193/screenshots/3022045/sad_coffee_dribbble.png",
    queueId: "a2",
    tracks: [
      {
        albumId: 2,
        artist: 'artist',
        id: 3,
        index: 0,
        title: 'song title'

      }, 
      {
        albumId: 2,
        artist: 'artist',
        id: 4,
        index: 1,
        title: 'song title'

      }
    ]},
    {
      artist: 'artist 1',
      id: 1,
      title: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error at eius voluptates illo magnam numquam, laudantium esse autem iure neque aliquam placeat repellat modi, ullam natus sed magni accusantium dolore.",
      image: "https://cdn.dribbble.com/users/659193/screenshots/3022045/sad_coffee_dribbble.png",
      queueId: "a1",
      tracks: [
        {
          albumId: 1,
          artist: 'artist',
          id: 1,
          index: 0,
          title: 'song title'
  
        },
        {
          albumId: 1,
          artist: 'artist',
          id: 2,
          index: 1,
          title: 'song title'
  
        }
      ]
    },
  
    {artist: 'artist 2',
      id: 2,
      title: "album title 2",
      image: "https://cdn.dribbble.com/users/659193/screenshots/3022045/sad_coffee_dribbble.png",
      queueId: "a2",
      tracks: [
        {
          albumId: 2,
          artist: 'artist',
          id: 3,
          index: 0,
          title: 'song title'
  
        }, 
        {
          albumId: 2,
          artist: 'artist',
          id: 4,
          index: 1,
          title: 'song title'
  
        }
      ]},
      {
        artist: 'artist 1',
        id: 1,
        title: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error at eius voluptates illo magnam numquam, laudantium esse autem iure neque aliquam placeat repellat modi, ullam natus sed magni accusantium dolore.",
        image: "https://cdn.dribbble.com/users/659193/screenshots/3022045/sad_coffee_dribbble.png",
        queueId: "a1",
        tracks: [
          {
            albumId: 1,
            artist: 'artist',
            id: 1,
            index: 0,
            title: 'song title'
    
          },
          {
            albumId: 1,
            artist: 'artist',
            id: 2,
            index: 1,
            title: 'song title'
    
          }
        ]
      },
    
      {artist: 'artist 2',
        id: 2,
        title: "album title 2",
        image: "https://cdn.dribbble.com/users/659193/screenshots/3022045/sad_coffee_dribbble.png",
        queueId: "a2",
        tracks: [
          {
            albumId: 2,
            artist: 'artist',
            id: 3,
            index: 0,
            title: 'song title'
    
          }, 
          {
            albumId: 2,
            artist: 'artist',
            id: 4,
            index: 1,
            title: 'song title'
    
          }
        ]},
        {
          artist: 'artist 1',
          id: 1,
          title: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error at eius voluptates illo magnam numquam, laudantium esse autem iure neque aliquam placeat repellat modi, ullam natus sed magni accusantium dolore.",
          image: "https://cdn.dribbble.com/users/659193/screenshots/3022045/sad_coffee_dribbble.png",
          queueId: "a1",
          tracks: [
            {
              albumId: 1,
              artist: 'artist',
              id: 1,
              index: 0,
              title: 'song title'
      
            },
            {
              albumId: 1,
              artist: 'artist',
              id: 2,
              index: 1,
              title: 'song title'
      
            }
          ]
        },
      
        {artist: 'artist 2',
          id: 2,
          title: "album title 2",
          image: "https://cdn.dribbble.com/users/659193/screenshots/3022045/sad_coffee_dribbble.png",
          queueId: "a2",
          tracks: [
            {
              albumId: 2,
              artist: 'artist',
              id: 3,
              index: 0,
              title: 'song title'
      
            }, 
            {
              albumId: 2,
              artist: 'artist',
              id: 4,
              index: 1,
              title: 'song title'
      
            }
          ]},
          {
            artist: 'artist 1',
            id: 1,
            title: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error at eius voluptates illo magnam numquam, laudantium esse autem iure neque aliquam placeat repellat modi, ullam natus sed magni accusantium dolore.",
            image: "https://cdn.dribbble.com/users/659193/screenshots/3022045/sad_coffee_dribbble.png",
            queueId: "a1",
            tracks: [
              {
                albumId: 1,
                artist: 'artist',
                id: 1,
                index: 0,
                title: 'song title'
        
              },
              {
                albumId: 1,
                artist: 'artist',
                id: 2,
                index: 1,
                title: 'song title'
        
              }
            ]
          },
        
          {artist: 'artist 2',
            id: 2,
            title: "album title 2",
            image: "https://cdn.dribbble.com/users/659193/screenshots/3022045/sad_coffee_dribbble.png",
            queueId: "a2",
            tracks: [
              {
                albumId: 2,
                artist: 'artist',
                id: 3,
                index: 0,
                title: 'song title'
        
              }, 
              {
                albumId: 2,
                artist: 'artist',
                id: 4,
                index: 1,
                title: 'song title'
        
              }
            ]}]

  const placeholderTracks: Track = {
    albumId: 1,
    artist: 'artist',
    id: 1,
    index: 0,
    title: 'song title',
    image: 'https://cdn.dribbble.com/users/659193/screenshots/3022045/sad_coffee_dribbble.png'

  }



  const [tracks, setTracks] = useState<Track[]>([placeholderTracks]);
  const [albums, setAlbums] = useState<Album[]>(placeholderAlbums);
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
  
  return (
    <>
      <AppContext.Provider value = {{tracks, albums, currentTrackIndex, playerTracks, setCurrentTrackIndex, setTracks, setErrorState, setAlbums, setPlayerTracks }}>
        <div className='visualizer'>
          <Visualizer />
        </div>
        <div className='sidebar'>
          <PlayerSidebar />
        </div>
        <div className='player'>
          <Player />
        </div>
      </AppContext.Provider>
    </>
  )
}

export default AppContextComponent