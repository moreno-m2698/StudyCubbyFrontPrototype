//Will need author, song name, and image
import { Track } from '../../types';
import { useContext } from "react"
import { TrackContext } from "../TrackContextComponent"

interface MusicTileProps {
    track: Track
}



function MusicTile(props: MusicTileProps) {


    const {currentTrackIndex, setCurrentTrackIndex} = useContext(TrackContext)

    return (
        <> 
            <li className="music-tile-list-item" key={props.track.id} onClick={() => {
            if (setCurrentTrackIndex !== undefined) {
                setCurrentTrackIndex(props.track.id -1)
                console.log(props.track.id)
                console.log(currentTrackIndex)
            }
                
                }}>
                <div className='music-tile-image'>
                    <img src={props.track.image} alt={props.track.title}/>
                </div>
                <div className="track-info-container">
                    
                    <div className="music-tile-title">
                        <a role="button" title={props.track.title}>
                            <span>
                                {props.track.title}
                            </span>
                        </a>
                    </div>
                    <div className="music-tile-author">
                        <span>{props.track.artist}</span>
                    </div>
                </div>
            </li>
        </>
    )

}

export default MusicTile