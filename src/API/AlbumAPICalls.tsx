import axios from "axios";
import { Track, Album } from "../types";
import { getTrackAudio } from "./ApiCalls";


export const getAlbumImage = async (albumId: number) => {
    try {
      const imageResponse = await axios.get(`http://localhost:3000/album/image/${albumId}`, { responseType: "blob" });
      let imageBlob = new Blob([imageResponse.data], { type: "image/png" });
      const imageURL = URL.createObjectURL(imageBlob);
      return imageURL;
    } catch (error) {
      console.log(error);
      return undefined;
    }
  };
  
export const getAlbumTracks = async (albumId: number, trackImage: string) => {
    try {
        const tracksResponse = await axios.get(`http://localhost:3000/album/tracks/${albumId}`);
        for (let i=0; i < tracksResponse.data.length; i++) {
            let track = tracksResponse.data[i];
            track.audio = await getTrackAudio(track.id);
            track.image = trackImage
        }
        
        const result = tracksResponse.data;
        return result


    } catch (error) {
        console.error(`There was an error accessing the album - ${albumId} tracks`, error)
    }
}

export const getAlbums = async () => {
    try {
        const albumResponse = await axios.get("http://localhost:3000/album");

        for (let j=0; j < albumResponse.data.length; j++) {

            const album: Album = albumResponse.data[j];
            
            album.image = await getAlbumImage(album.id);

            //Will eventually need to move this function out so that we can lazy load tracks inside of the accordion

        }

        
        return albumResponse.data;
    } catch (error) {

        console.log(error);
        return [];
    }
}
