import { useContext, useEffect } from "react"
import { AppContext } from "../AppContextComponent.tsx"
import MusicTile from "./MusicTile"
import { Track } from "../../types.ts"
import { getTracks } from '../../API/ApiCalls';


function MusicSideBar() {

    //Should have a scroll feature
    //Need to have sound tiles being made change song if they are clicked

    const {tracks, setTracks, setErrorState} = useContext(AppContext)

    useEffect(() => {
        (async() => {
            if (tracks.length === 0 && setTracks !== undefined && setErrorState !== undefined) {
              
              const response = await getTracks()
              const tracks = response.tracks
              const errorState = response.errorState
      
              setTracks(tracks)
              setErrorState(errorState)
            }
          })();

    }
    ,[])


    return (
        <ul>
            {tracks.map( (track:Track, index) => <MusicTile key={index} track={track}/>)}
        </ul>
    )
}

export default MusicSideBar