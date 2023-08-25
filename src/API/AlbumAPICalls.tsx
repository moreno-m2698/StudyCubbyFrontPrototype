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
  


export const getAlbums = async () => {
    try {
        const albumResponse = await axios.get("http://localhost:3000/album");

        for (let j=0; j < albumResponse.data.length; j++) {

            const album: Album = albumResponse.data[j];
            
            album.image = await getAlbumImage(album.id);

        }

        
        return albumResponse.data;
    } catch (error) {

        console.log(error);
        return [];
    }
}
