import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';


function SingleDropZoneComponent() {

    const [track, setTrack] = useState<File|null>(null);
    const [imageFile, setImageFile] = useState<File|null>(null)
    const [title, setTitle] = useState<string>('')
    const [artist, setArtist] = useState<string>('')


    const handleSubmit = async (event: any) => {
        event.preventDefault();
    
        if (!track || !imageFile ) return
    
        const formData = new FormData()
        formData.append('track', track);
        formData.append('cover', imageFile);
        formData.append('title', title);
        formData.append('artist', artist);
    

        const URL = "http://localhost:3000/single"
        const data = await axios.post(URL, formData)
        console.log(data)
    
      }



    const onDrop = useCallback((acceptedFiles: File[]) => {
        if (acceptedFiles.length) {

        setTrack(acceptedFiles[0])
        
        }
        console.log(acceptedFiles)
    }, []);
    

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, accept: {'audio/*': []}});


    



        return (<>
            <h1>Upload a Single</h1>
            <form id='upload-form' encType='multipart/form-data' onSubmit={handleSubmit}>
                <div {...getRootProps({className:'p-16 mt-10 border border-neutral-200'})} style={{ border: '1px solid #ccc', padding: '20px', textAlign: 'center' }}>
                <input {...getInputProps()} name="track"/>
                {isDragActive ? (
                    <p>Drop your files here ... </p>
                    ) : (
                    <p>Drag and drop audio/image files here, or click to select files</p>
                    )}
                </div>
                <h1>Upload an Image</h1>
                <div id='upload-image'>
                    <label>Upload an image</label>
                    <input type="file" accept='image/*' name="cover" onChange={(event: any) => setImageFile(event.target.files[0])} ></input>
                </div>
                <h2>Details</h2>
                <input type="text" placeholder="Title" name="title" onChange={(event: any) => setTitle(event.target.value)}></input>
                <input type="text" placeholder="Artist" name="artist" onChange={(event: any) => setArtist(event.target.value)}></input>
                <input type='submit'></input>
            </form>
            </>
        )



}

export default SingleDropZoneComponent;