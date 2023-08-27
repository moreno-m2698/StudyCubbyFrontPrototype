import { Track } from '../../types'

interface AlbumUnfoldProps {
    tracks: Track[]
    selectedIndex: number|null
    albumIndex: number
}

function AlbumUnfoldComponent(props: AlbumUnfoldProps) {
  return (
    <div className={props.selectedIndex === props.albumIndex? 'content show' : 'content'}>
        {props.tracks.map((song) => (
            <div>
                {song.title}
            </div>
        ))}
    </div>           
   
  )
}

export default AlbumUnfoldComponent