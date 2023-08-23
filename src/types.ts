
export interface Track {
    id: number,
    title: string,
    albumId: number,
    artist: string,
    [key: string]: any
}


export interface Album {
    id: number,
    title: string,
    artist: string,
    image?: string,
}