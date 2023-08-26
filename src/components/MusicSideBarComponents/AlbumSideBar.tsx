import { useContext, useEffect, useState } from "react"
import { AppContext } from "../AppContextComponent.tsx"
import AlbumAccordion from "./AlbumAccordionHolder.tsx"
import { Album } from "../../types.ts"
import { getAlbums } from '../../API/AlbumAPICalls.tsx';


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
            <ul>
                {albums?.map((album:Album, index) => 
                    <li className='sidebar-item' key={index} onClick={() => accordionToggle(index)}>
                        <div className='music-tile-image'>
                            <img src={album.image} alt={album.title}/>
                        </div>
                        <div className="sidebar-item-info-container">
                            <div className="music-tile-title">
                                <a role="button" title={album.title}>
                                    <span>
                                        {album.title}
                                    </span>
                                </a>
                            </div>
                            <div className="music-tile-author">
                                <span>{album.artist}</span>
                            </div>         

                            {/*This is the toggle information*/}

                            <div className={selected === index? 'content show' : 'content'}>
                                {album.tracks.map((song) => (
                                    <div>
                                        {song.title}
                                    </div>
                                ))}
                            </div>                  
                        </div>

                        
                         

                       
                    </li>
                
                )}
            </ul>
        </div>
    )
}

export default AlbumSideBar