
export interface Track {
    id: number,
    title: string,
    albumId: number,
    artist: string,
    [key: string]: any,
    index: number,
    playerId: string|null
}


export interface Album {
    id: number,
    title: string,
    artist: string,
    image?: string,
    tracks?: Track[],
    queueId?: string
}

export interface Queue { //This interface is used to create queue objects which will be used to help keep track of different players during lazy loading
    id: string,
    tracks?: Track[]
}