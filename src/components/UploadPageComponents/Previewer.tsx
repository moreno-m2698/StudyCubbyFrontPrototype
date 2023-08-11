
interface PreviewerProps {
    files: File[]
    setFiles: any
    removeFile: any
}

function Previewer(props: PreviewerProps) {

    const handleAdditionalFile = (event: any) => {
        const files: File[] | null = event.target.files
    
        if (files) {
          props.setFiles([
            ...props.files,
            ...files
        ])
        }
      }

  return (
        <>
         
          {props.files.map(file => (
            <li key={file.name}>
              <label>Track Name:</label>
              <input type='text' value={file.name} name='title'></input>              
              <button type='button' onClick={() => props.removeFile(file.name)}>RemoveFile</button>
            </li>
          ))}
          <li>
            <label>Add additional tracks</label>
            <input type="file" accept='audio/*' onChange={handleAdditionalFile}></input>
          </li>
          <li>
            <input type='submit'></input>
          </li> 
        </>

  )
}

export default Previewer