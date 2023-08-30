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
  const trackSelect = (index:number) => {
    if (playerTracks.id !== props.queueId) {
      const albumQueue = {
        id: props.queueId,
        tracks: props.tracks
      }

      if (setPlayerTracks !== undefined) {
        setPlayerTracks(albumQueue)
      }
    }

    if (setCurrentTrackIndex !== undefined) {
      setCurrentTrackIndex(index);
    }
  }

  return (
    <div className={props.selectedIndex === props.albumIndex ? 'content show' : 'content'}>
      <ol className='album-accordion-list' aria-label='Album Tracks'>
        {props.tracks.map((song, index) => (
            <li>
              <button onClick={() => {trackSelect(index); console.log(playerTracks)}} key={index} className='album-accordion-tracks'>
                <div className='album-accordion-track'>
                  <h4>
                      { song.index + 1 }
                  </h4>
                  <div>
                    <h4>
                      {song.title}
                    </h4>
                    <h5>
                      {song.artist}
                    </h5>
                  </div>
                </div>
              </button>
            </li>
        ))}
        </ol>
    </div>

  )
}

export default AlbumUnfoldComponent
