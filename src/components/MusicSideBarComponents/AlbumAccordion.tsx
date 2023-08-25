//Will need author, song name, and image
import { useState, useEffect } from 'react';
import { Album } from '../../types';
import { useContext } from "react";
import { AppContext } from "../AppContextComponent";


interface AlbumAccordionProps {
    album: Album
    accordionToggle: any
    selected: number|null

}


function AlbumAccordion(props: AlbumAccordionProps) {

    const [albumTracks, setAlbumTracks] = useState([...props.album.tracks]);
    const tracks = props.album.tracks

  

    

    return (
        <> 
            <div className='album-tile'>
                <div>
                    {albumTracks.map((track, index) => (
                        <div className='item'>
                        <div className='title' onClick={() => props.accordionToggle(index)}>
                            <h1>{track.title}</h1>
                            <span>{props.selected === index ? '-' : '+' }</span>
                        </div>
                        <div className={props.selected === index? 'content show' : 'content'}>
                            {track.artist}
                        </div>
                    </div>

                    ))}
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