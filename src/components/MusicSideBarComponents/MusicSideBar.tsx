import { useContext } from "react"
import { TrackContext } from "../TrackContextComponent.tsx"
import MusicTile from "./MusicTile"
import { Track } from "../../types.ts"


function MusicSideBar() {

    //Should have a scroll feature
    //Need to have sound tiles being made change song if they are clicked


    const {tracks} = useContext(TrackContext)



    return (
        <ul>
            {tracks?.map( (track:Track) => <MusicTile track={track}/>)}
        </ul>
    )
}

export default MusicSideBar