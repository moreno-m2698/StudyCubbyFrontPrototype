import { useState } from 'react';
import axios from 'axios';

function SingleMaker() {

    const [imageFile, setImageFile] = useState<File|null>(null);
    const [trackFile, setTrackFile] = useState<File|null>(null);
    const [title, setTitle] = useState<string>('');
    const [artist, setArtist] = useState<string>('');

    const handleUpload = async (event: any) => {
        event.preventDefault();
        if (!imageFile) return    
          const formData = new FormData();
          formData.append('cover', imageFile)
          formData.append('track', trackFile)
          formData.append('title', title)
          formData.append('artist', artist)

          const url = "http://localhost:3000/single/upload"
          
          try {
          const result = await axios.post(url, formData)
          console.log(result);
          } catch (error) {
          console.error(error);}
          
    
      };
    

    const coverFileInputChange = async (event) => {
      const file = event.target.files[0]
      setImageFile(file);
    }

    const trackFileInputChange = async (event) => {
        const file = event.target.files[0]
        setTrackFile(file);
    }



  return (
    <div>Single Maker
        <form encType='multipart/form-data' onSubmit={handleUpload}>
            <input type='file' accept='image/*' name='cover' onChange={(event: any) => coverFileInputChange(event)}/>
            <input type='file' accept='audio/*' name='track' onChange={(event: any) => trackFileInputChange(event)}/>
            <input type='text' placeholder='Title' onChange={(event: React.ChangeEvent<HTMLInputElement>) => setTitle(event.target.value)}/>
            <input type='text' placeholder='Artist' onChange={(event: React.ChangeEvent<HTMLInputElement>) => setArtist(event.target.value)}/>
            <input type='submit' />
        </form>

    </div>
  )
}

export default SingleMaker