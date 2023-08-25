//Will need author, song name, and image
import { useState, useEffect } from 'react';
import { Album } from '../../types';
import { useContext } from "react"
import { AppContext } from "../AppContextComponent"
import { getAlbumTracks } from '../../API/ApiCalls';


interface AlbumAccordionProps {
    album: Album

}


function AlbumAccordion(props: AlbumAccordionProps) {

    const [albumTracks, setAlbumTracks] = useState([]);

    useEffect(() => {
        (async() => {
            if (albumTracks.length === 0 && setAlbumTracks !== undefined) {
            //     const response = await getAlbumTracks(props.album.id);
            //     console.log(response)

            //     setAlbumTracks(response)
            return null
            }
        })
    }, []);

    

    return (
        <> 
            <div className='album-tile'>
                <div>

                </div>
            </div>
                <div className='music-tile-image'>
                    <img src={props.album.image} alt={props.album.title}/>
                </div>
                <div className="track-info-container">
                    
                    <div className="album-tile-title">
                        <a role="button" title={props.album.title}>
                            <span>
                                {props.album.title}
                            </span>
                        </a>
                    </div>
                    <div className="album-tile-author">
                        <span>{props.album.artist}</span>
                    </div>
                </div>

        </>
    )

}

export default AlbumAccordion