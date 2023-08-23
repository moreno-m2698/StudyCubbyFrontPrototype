import axios from "axios";
import { Track, Album } from "../types";


const getAlbumImage = async (albumId: number) => {
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
  

  const getTrackAudio = async (trackID: number) => {
    try {
      const audioResponse = await axios.get(`http://localhost:3000/track/play/${trackID}`, { responseType: "blob" });
      let audioBlob = new Blob([audioResponse.data], { type: "audio/mpeg" });
      const audioURL = URL.createObjectURL(audioBlob);
      return audioURL;
    } catch (error) {
      console.log(error);
      return null; //or handle the error in an appropriate way
    }
  };


  const getSingleImage = async (singleID: number) => {
    try {
      const imageResponse = await axios.get(`http://localhost:3000/single/image/${singleID}`, { responseType: "blob" });
      let imageBlob = new Blob([imageResponse.data], { type: "image/png" });
      const imageURL = URL.createObjectURL(imageBlob);
      return imageURL;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  const getSingleAudio = async (singleId: number) => {
    try {
      const audioResponse = await axios.get(`http://localhost:3000/single/play/${singleId}`, { responseType: "blob" });
      let audioBlob = new Blob([audioResponse.data], { type: "audio/mpeg" });
      const audioURL = URL.createObjectURL(audioBlob);
      return audioURL;
    } catch (error) {
      console.log(error);
      return null; // or handle the error in an appropriate way
    }
    
  }



  interface getTracksResponse {
    errorState: boolean
    tracks: Track[]
    }



export const getTracks = async () => {
    try {
        const trackResponse = await axios.get("http://localhost:3000/track")

        for (let i=0; i < trackResponse.data.length; i++) {

            const track = trackResponse.data[i];


            track.image = await getAlbumImage(track.albumId);
            track.audio = await getTrackAudio(track.id);
        }

        
        const result: getTracksResponse = {
            errorState: false,
            tracks: [...trackResponse.data]
        }
        return result;
    } catch (error) {
        console.log(error); 
        const result: getTracksResponse = {
            errorState: true,
            tracks: []
        }
      return result;
    }
}

export const getAlbums = async () => {
    try {
        const albumResponse = await axios.get("http://localhost:3000/album");

        for (let j=0; j < albumResponse.data.length; j++) {

            const album: Album = albumResponse.data[j];
            
            album.image = await getAlbumImage(album.id);

            console.log("Album image", album.image);

        }

        
        return albumResponse.data;
    } catch (error) {

        console.log(error);
        return [];
    }
}
