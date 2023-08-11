import { useContext } from 'react';
import SkipBackwardButton from './ButtonComponents/SkipBackwardButton'
import SkipForwardButton from './ButtonComponents/SkipForwardButton'
import PlayButton from './ButtonComponents/PlayButton'
import { TrackContext } from '../TrackContextComponent';

function Controls() {

    const {tracks, currentTrackIndex, setCurrentTrackIndex} = useContext(TrackContext)

    const SkipTrack = (forwards = true) => {
        if (setCurrentTrackIndex  !== undefined) {

            const endIndex = tracks.length - 1;

            let tempT = ((forwards) ? 1 : -1) + currentTrackIndex;

            const isGreaterThanEndIndex = tempT > endIndex;

            const isLessThanStartIndex = tempT < 0;

            tempT = (isGreaterThanEndIndex) ? 0 : tempT;

            tempT = (isLessThanStartIndex) ? endIndex : tempT;

            setCurrentTrackIndex(tempT);

        }
    }

    return (
        <div className="player-controls">
            <SkipBackwardButton SkipTrack = {SkipTrack}/>
            <PlayButton />
            <SkipForwardButton SkipTrack = {SkipTrack}/>
        </div>
    )
}

export default Controls