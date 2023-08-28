import { Track } from '../../types'

interface AlbumUnfoldProps {
    tracks: Track[]
    selectedIndex: number|null
    albumIndex: number
}

//todo : put number next to each element
//Also put an indicator to show which song is playing



function AlbumUnfoldComponent(props: AlbumUnfoldProps) {
  return (
    <div className={props.selectedIndex === props.albumIndex ? 'content show' : 'content'}>
        {props.tracks.map((song, index) => (
            <div onClick={() => null} key={index}>
                {song.index + 1}
                {song.title}
                {song.artist}
            </div>
        ))}
    </div>           
   
  )
}

export default AlbumUnfoldComponent