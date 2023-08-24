import { useContext, useEffect } from "react"
import { AppContext } from "../AppContextComponent.tsx"
import AlbumAccordion from "./AlbumAccordion.tsx"
import { Album } from "../../types.ts"
import { getAlbums } from '../../API/ApiCalls.tsx';


function AlbumSideBar() {

    //Should have a scroll feature
    //Need to have sound tiles being made change song if they are clicked

    const {albums, setAlbums} = useContext(AppContext)

    useEffect(() => {
        (async() => {
            if (albums.length === 0 && setAlbums !== undefined) {
              
                const response = await getAlbums()
                
                const newAlbums = response
        
                setAlbums(newAlbums)

            }
          })();
    }
    ,[])


    return (
        <ul>
            {albums?.map((album:Album, index) => <AlbumAccordion key={index} album={album}/>)}
        </ul>
    )
}

export default AlbumSideBar