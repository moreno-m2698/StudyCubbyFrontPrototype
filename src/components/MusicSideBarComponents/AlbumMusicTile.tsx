//Will need author, song name, and image
import { Album } from '../../types';
import { useContext } from "react"
import { AppContext } from "../AppContextComponent"


interface AlbumTileProps {
    album: Album

}


function AlbumMusicTile(props: AlbumTileProps) {


    

    return (
        <> 
            <li className="music-tile-list-item" key={props.album.id} onClick={() => {
                
                }}>
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
            </li>
        </>
    )

}

export default AlbumMusicTile