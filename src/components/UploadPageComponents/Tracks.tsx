import React from 'react'
import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';


function Tracks() {

    const onDrop = useCallback((acceptedFiles: File[]) => {
        if (acceptedFiles.length) {
          setFiles(previousFiles => [
            ...previousFiles,
            ...acceptedFiles.map(file => 
              Object.assign(file, { preview: URL.createObjectURL(file) }))
              //Look at revoking url on unload later to prevent memory leak
          ])
        }
        console.log(acceptedFiles)
      }, []);
    
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, accept: {
        'audio/*': []
      } });

    const [selectedFile, setSelectedFile] = useState<File|null>(null);
    const [files, setFiles] = useState<File[]>([])


    return (
        <div {...getRootProps()} style={{ border: '1px solid #ccc', padding: '20px', textAlign: 'center' }}>
            <input {...getInputProps()} />
            {isDragActive ? (
                <p>Drop your files here ... </p>
              ) : (
                <p>Drag and drop audio/image files here, or click to select files</p>
              )}
          </div>
    )
}

export default Tracks