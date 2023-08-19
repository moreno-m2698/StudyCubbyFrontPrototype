import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';
import Previewer from './Previewer';


function SingleDropZoneComponent() {

    const [files, setFiles] = useState<File[]>([]);
    const [albumID, setAlbumID] = useState<number|null>();


    const handleSubmit = async (event: any) => {
        event.preventDefault();
    
        if (!files || !albumID) return
    
        const formData = new FormData()
        formData.append('tracks', files);
    

        const URL = "http://localhost:3000/single"
        const data = await axios.post(URL, formData)
        console.log(data)
    
      }



    const onDrop = useCallback((acceptedFiles: File[]) => {
        if (acceptedFiles.length) {

        setFiles(acceptedFiles)
        
        }
        console.log(acceptedFiles)
    }, []);
    

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, accept: {'audio/*': []}});


    



        return (<>
            <h1>Upload Tracks to Album</h1>
            <form id='upload-form' encType='multipart/form-data' onSubmit={handleSubmit}>
                <div {...getRootProps({className:'p-16 mt-10 border border-neutral-200'})} style={{ border: '1px solid #ccc', padding: '20px', textAlign: 'center' }}>
                <input {...getInputProps()} name="track"/>
                {isDragActive ? (
                    <p>Drop your files here ... </p>
                    ) : (
                    <p>Drag and drop audio/image files here, or click to select files</p>
                    )}
                </div>
                
                <h2>Album Details</h2>
                <input type="text" placeholder="Album ID" name="albumID" onChange={(event: any) => setAlbumID(event.target.value)}></input>
                <ul>

                    {files.length > 0 ? null : null }
                </ul>
                <input type='submit'></input>
            </form>
            </>
        )



}

export default SingleDropZoneComponent;