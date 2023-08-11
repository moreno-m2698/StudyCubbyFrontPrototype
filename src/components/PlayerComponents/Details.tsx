import { useContext } from "react"
import { TrackContext } from "../TrackContextComponent"

function Details() {

    const {tracks, currentTrackIndex} = useContext(TrackContext)

    return (<>
        <div className="player-details">
            <div className='music-tile-image'>
                <img src={tracks[currentTrackIndex].image} alt={tracks[currentTrackIndex].title}/>
            </div>
            <div className="track-info-container">
                <div className="">
                    <span>
                        {tracks[currentTrackIndex].title}
                    </span>
                </div>
                <div className="">
                    <span>{tracks[currentTrackIndex].artist}</span>
                </div>
            </div>
        </div>
    </>)
}

export default Details