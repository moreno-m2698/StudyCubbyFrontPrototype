import { useContext } from "react"
import { AppContext } from "../AppContextComponent"

function Details() {

    const {queue, currentTrackIndex} = useContext(AppContext)

    return (<>
        <div className="player-details">
            <div className='music-tile-image'>
                <img src={queue.tracks[currentTrackIndex].image} alt={queue.tracks[currentTrackIndex].title}/>
            </div>
            <div className="track-info-container">
                <div className="">
                    <span>
                        {queue.tracks[currentTrackIndex].title}
                    </span>
                </div>
                <div className="">
                    <span>{queue.tracks[currentTrackIndex].artist}</span>
                </div>
            </div>
        </div>
    </>)
}

export default Details