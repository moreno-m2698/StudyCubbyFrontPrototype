import React from 'react'
import { useCallback, useState } from 'react';
import axios from 'axios';
import { useDropzone } from 'react-dropzone';
import Preview from './Preview';


interface fileData {
    id: number,
    file: File,
    fileName: string,
    inputName: string

}


function Tracks() {

    const onDrop = useCallback((acceptedFiles: File[]) => {
        if (acceptedFiles.length) {
          setFiles(previousFiles => [
            ...previousFiles,
            ...acceptedFiles.map(file => 
              Object.assign(file, { preview: URL.createObjectURL(file) }))
              //Look at revoking url on unload later to prevent memory leak
          ])

          const previewFileArray = acceptedFiles.map((file, index)=> {
            const fileData = {
                id: index,
                file: file,
                fileName: file.name,
                inputName: ''
            }
            return fileData

          });
          setFilePreview(previewFileArray)

        }
      }, []);
    
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, accept: {
        'audio/*': []
      } });

    const [selectedFile, setSelectedFile] = useState<File|null>(null);
    const [files, setFiles] = useState<File[]>([])
    const [filePreview, setFilePreview] = useState<fileData[]>([])
    const [albumID, setAlbumID] = useState<string|null>() 


    function getFileOut(fileData) {
      return fileData.file
    }

    const handleSubmit = async (event) =>{
        event.preventDefault();
        if (!filePreview||!albumID) return
          console.log(filePreview)
          const newFileOrder = filePreview.map((preview) => {
            return preview.file
          });
          const fileNameArray: string[] = filePreview.map((preview) => {
            if (!preview.inputName)
              return preview.fileName
            else 
              return preview.inputName
          })


          const formData = new FormData();
          for (let i = 0; i < newFileOrder.length; i++) {
            formData.append('tracks', newFileOrder[i]);
          }
          formData.append('albumID', albumID);
          for (let i = 0; i < fileNameArray.length; i++) {
            formData.append('titles', fileNameArray[i]);
          }

          const url = "http://localhost:3000/track/upload/test"

          try {
            const result = await axios.post(url, formData)
            console.log(result);
            } catch (error) {
            console.error(error);}
    }
    




    return (
        (files.length === 0) ?
        <div {...getRootProps()} style={{ border: '1px solid #ccc', padding: '20px', textAlign: 'center' }}>
            <input {...getInputProps()} />
            {isDragActive ? (
                <p>Drop your files here ... </p>
              ) : (
                <p>Drag and drop audio/image files here, or click to select files</p>
              )}
        </div>
        :
        <div>
            <h1>Preview</h1>
            <form encType='multipart/form-data' onSubmit={handleSubmit}>
                <input type='text' placeholder='album ID' onChange={(event: React.ChangeEvent<HTMLInputElement>) => setAlbumID(event.target.value)}/>
                <Preview fileData = {filePreview} setFileData={setFilePreview}/>
                <input type='submit' />
            </form>
        </div>
    )
}

export default Tracks