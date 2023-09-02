import { useContext } from "react"
import { AppContext } from "../AppContextComponent"

function Details() {

    const {playerTracks: queue, currentTrackIndex} = useContext(AppContext)

    return (<>
        <div className="player-details">
            <img src={queue.tracks[currentTrackIndex].image} alt={queue.tracks[currentTrackIndex].title}/>
            <div className="player-info-container">
                    <h2>
                        {queue.tracks[currentTrackIndex].title}
                    </h2>
                    <h3>
                        {queue.tracks[currentTrackIndex].artist}
                    </h3>
            </div>
        </div>
    </>)
}

export default Details