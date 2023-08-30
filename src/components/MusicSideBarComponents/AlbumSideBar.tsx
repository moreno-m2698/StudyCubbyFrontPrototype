import { useContext, useEffect, useState } from "react"
import { AppContext } from "../AppContextComponent.tsx"
import {Album, Track} from "../../types.ts"
import { getAlbums, getAlbumTracks } from '../../API/AlbumAPICalls.tsx';
import AlbumUnfoldComponent from "./AlbumUnfoldComponent.tsx";
import '../../CSS/sidebar.css'



function AlbumSideBar() {

    //Should have a scroll feature
    //Need to have sound tiles being made change song if they are clicked


    const {albums, setAlbums} = useContext(AppContext)
    const [selected, setSelected] = useState<number|null>(null);

    useEffect(() => {
        (async() => {
            if (albums.length === 0 && setAlbums !== undefined) {

                const response = await getAlbums();

                const newAlbums = response
                // for (let i = 0; i < newAlbums.length; i++) {
                //     let album = newAlbums[i];
                //     album.tracks =  await getAlbumTracks(album.id);
                // }


                setAlbums(newAlbums)

            }
          })();
    }
    ,[])

    const accordionToggle = async (index: number) => {

        const album = albums[index]


        if (selected === index) {
            return setSelected(null)
        }
        if (!album.tracks) {
            const trackResponse = await getAlbumTracks(album.id, album.image);

            album.tracks = trackResponse
            setAlbums(albums);
        }

        setSelected(index);
    }


    return (
        <div className="album-sidebar">
            <ul className='sidebar-list'>
                {albums?.map((album:Album, index) =>
                    <li className='sidebar-item' key={index}>
                        <button
                            className='sidebar-item-button'
                            aria-label='Expand Album'
                            onClick={() => accordionToggle(index)}
                            data-toggled={index===selected}
                        >
                            <img className='music-tile-image' src={album.image} alt={album.title}/>
                            <div className='music-tile-info'>
                                <h2 className="music-tile-title">
                                    {album.title}
                                </h2>
                                <h3 className="music-tile-author">
                                    {album.artist}
                                </h3>
                            </div>
                        </button>
                        <div className="sidebar-item-info-container">
                            {/*This is the toggle information*/}

                            {!album.tracks ? null : <AlbumUnfoldComponent queueId={album.queueId} tracks={album.tracks} albumIndex={index} selectedIndex={selected}/>}
                        </div>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default AlbumSideBar
