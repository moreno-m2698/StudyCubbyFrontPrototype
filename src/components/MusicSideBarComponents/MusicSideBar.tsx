import { useContext, useEffect } from "react"
import { AppContext } from "../AppContextComponent.tsx"
import MusicTile from "./MusicTile"
import { Track } from "../../types.ts"
import { getTracks } from '../../API/ApiCalls';


function MusicSideBar() {

    //Should have a scroll feature
    //Need to have sound tiles being made change song if they are clicked

    const {tracks, setTracks, setErrorState, setPlayerTracks} = useContext(AppContext)

    useEffect(() => {
        (async() => {
            if (tracks.length === 0 && setTracks !== undefined && setErrorState !== undefined) {
              
              const response = await getTracks();
              const tracks = response.tracks
              const errorState = response.errorState
              const trackQueue = {
                id: "tracks",
                tracks: tracks
              }

                setPlayerTracks(trackQueue)
              setTracks(tracks)
              setErrorState(errorState)
            }
          })();

    }
    ,[])


    return (
        <ul>
            {tracks.map((track:Track, index) => <MusicTile track={track} key={index} trackIndex={index}/>)}
        </ul>
    )
}

export default MusicSideBar