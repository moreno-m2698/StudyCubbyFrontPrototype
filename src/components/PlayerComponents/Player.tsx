import {useState, useRef, useEffect, useContext, createContext} from 'react'
import Controls from './Controls';
import Details from './Details';
import { AppContext } from '../AppContextComponent';



export interface PlayerContext {
    isPlaying: boolean,
    setIsPlaying?: React.Dispatch<React.SetStateAction<boolean>>
  }

export const PlayerContext= createContext<PlayerContext>({isPlaying: false});

function Player() {

    const audioElement = useRef<HTMLAudioElement | null>(null); //Ties in reference to our audio element
    //Does not trigger a re-render of the component
    // is not used for rendering components
    //used to hold value that is not needed for the ui
    //Also allows us to specifically target and reveference the audio element
    //Spotify is probably using websockets to stream audio since I cannot find the audio tag

    const {tracks, currentTrackIndex, queue} = useContext(AppContext)

    const [isPlaying, setIsPlaying] = useState(false); //Used to determine if the audio is playingS

    useEffect(() => { //This effect allows us to have the player still be in play position even if we change tracks.
        if (audioElement.current !== null) {
            if (isPlaying) {
                audioElement.current.play();
            } else {
                audioElement.current.pause();
        }
    }
    });

    return (
        <PlayerContext.Provider value={{isPlaying, setIsPlaying}}>
                {(tracks.length === 0) ? null :
                <>
                <audio src={tracks[currentTrackIndex].audio} ref={audioElement}></audio>
                <Details/>
                <Controls/>
                <div className='player-placeholder'>
                </div>    
                </>
                }  
        </PlayerContext.Provider>
    );
}

export default Player;