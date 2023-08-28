import { useContext } from 'react'
import { Track } from '../../types'
import { AppContext } from '../AppContextComponent'

interface AlbumUnfoldProps {
    tracks: Track[]
    selectedIndex: number|null
    albumIndex: number,
    queueId: string
}

//todo : put number next to each element
//Also put an indicator to show which song is playing





function AlbumUnfoldComponent(props: AlbumUnfoldProps) {

  const {currentTrackIndex, setCurrentTrackIndex, playerTracks, setPlayerTracks} = useContext(AppContext);
  const trackSelect = (index) => {
    if (playerTracks.id !== props.queueId) {
      const albumQueue = {
        id: props.queueId,
        tracks: props.tracks
      }
      
      setPlayerTracks(albumQueue)
    }

    if (setCurrentTrackIndex !== undefined) {
      setCurrentTrackIndex(index);
    }
  }

  return (
    <div className={props.selectedIndex === props.albumIndex ? 'content show' : 'content'}>
        {props.tracks.map((song, index) => (
            <div onClick={() => {trackSelect(index); console.log(playerTracks)}} key={index}>
                {song.index + 1}
                {song.title}
                {song.artist}
            </div>
        ))}
    </div>           
   
  )
}

export default AlbumUnfoldComponent