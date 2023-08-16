import { useState } from "react";
import SingleDropZoneComponent from "../components/UploadPageComponents/SingleDropZoneComponent";
import AlbumMaker from "../components/UploadPageComponents/AlbumMaker";
import SingleMaker from "../components/UploadPageComponents/SingleMaker";

function Upload() {

  const [selectedRadioButton, setSelectedRadioButton] = useState('Album')
  const isRadioSelected = (value: string): boolean => selectedRadioButton === value;

  const handleRadioClick = (event: React.ChangeEvent<HTMLInputElement>): void => setSelectedRadioButton(event.currentTarget.value);

  return (
    <div className="upload-page">
      <h1>Upload Page</h1>
      <input type="radio" id='Album' name="upload-selector" value="Album" checked={isRadioSelected('Album')} onChange={handleRadioClick} />
      <label htmlFor="Album">Make an album</label><br></br>
      <input type="radio" name="upload-selector" value="Single" checked={isRadioSelected('Single')} onChange={handleRadioClick} />
      <label htmlFor="Single">Make a single</label><br></br>
      <input type="radio" name="upload-selector" value="Tracks" checked={isRadioSelected('Tracks')} onChange={handleRadioClick} />
      <label htmlFor="Tracks">Add tracks to album/single</label><br></br>
      {isRadioSelected('Album') ? <AlbumMaker/>: (isRadioSelected('Single') ? <SingleMaker />:<SingleDropZoneComponent/> ) }
    </div>
  );
};

export default Upload;