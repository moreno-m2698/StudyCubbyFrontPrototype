import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';
import Previewer from './Previewer';

function Dropzone(props: any) {
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
  const [imageFile, setImageFile] = useState<File[]>([])

  const handleSubmit = async e => {
    e.preventDefault();

    if (!files.length) return

    const formData = new FormData()
    files.forEach(file => formData.append('track', file))
    formData.append('cover', imageFile)

    const URL = "http://localhost:3000/track/music/upload"
    const testURL = "http://localhost:3000/single"
    const data = await axios.post(testURL, formData)
    console.log(data)

  }

  const removeFile = (fileName: string) => {
    setFiles(files => files.filter(file => file.name !== fileName))
  }

  const handleImageFile = (event: any) => {
    const files: File[] | null = event.target.files

    if (files) {
      setImageFile(files[0]) 
    }
  }

  return (<>

      <form id='upload-form' encType='multipart/form-data' onSubmit={handleSubmit}>
        <div {...getRootProps({
          className: props.className
        })} style={{ border: '1px solid #ccc', padding: '20px', textAlign: 'center' }}>
          <input {...getInputProps()} />
          {isDragActive ? (
              <p>Drop your files here ... </p>
            ) : (
              <p>Drag and drop audio/image files here, or click to select files</p>
            )}
        </div>

        {/* Preview */}
        
        <div className='previewer-container'>
          <ul>
            <li>
              <div id='upload-image'>
                <label>Upload an image</label>
                <input type="file" accept='image/*' name="cover" onChange={handleImageFile} ></input>
              </div>
            </li>
            {files.length > 0 ? <Previewer files={files} setFiles = {setFiles} removeFile={removeFile}/> : null}
          </ul>
        </div>
      </form>
      

    </>
  );
};

export default Dropzone;
