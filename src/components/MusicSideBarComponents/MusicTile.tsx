//Will need author, song name, and image
import { Track } from '../../types';
import { useContext } from "react"
import { AppContext } from "../AppContextComponent"


interface MusicTileProps {
    track: Track, 
    key: number,
    trackIndex: number
}


function MusicTile(props: MusicTileProps) {


    const {setCurrentTrackIndex, tracks, playerTracks, setPlayerTracks} = useContext(AppContext)

    const selectTrack = () => {
        console.log(playerTracks.id)
        if (playerTracks.id != "tracks") {
            const trackQueue = {
                id: "tracks",
                tracks: tracks
            }
            setPlayerTracks(trackQueue)
        }
        if (setCurrentTrackIndex !== undefined) {
            setCurrentTrackIndex(props.trackIndex)
        }
    }



    return (

        <li className="sidebar-item"  onClick={() => selectTrack()}>
            <div className='music-tile-image'>
                <img src={props.track.image} alt={props.track.title}/>
            </div>
            <div className="sidebar-item-info-container">  
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
    )

}

export default MusicTile