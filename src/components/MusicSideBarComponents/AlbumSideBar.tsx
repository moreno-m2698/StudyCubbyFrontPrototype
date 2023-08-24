import { useContext, useEffect, useState } from "react"
import { AppContext } from "../AppContextComponent.tsx"
import AlbumAccordion from "./AlbumAccordion.tsx"
import { Album } from "../../types.ts"
import { getAlbums } from '../../API/ApiCalls.tsx';


function AlbumSideBar() {

    //Should have a scroll feature
    //Need to have sound tiles being made change song if they are clicked
    

    const {albums, setAlbums} = useContext(AppContext)
    const [selected, setSelected] = useState<number|null>(null);

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

    const accordionToggle = (index: number|null) => {
        if (selected === index) {
            return setSelected(null)
        }
        setSelected(index);
    }


    return (
        <div className="album-accordion">
            {albums?.map((album:Album, index) => <AlbumAccordion key={index} album={album}/>)}
        </div>
    )
}

export default AlbumSideBar