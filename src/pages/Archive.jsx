import { useRef, useState } from "react";

const Archive = () => {
  const [file, setFile] = useState(0);
  const inputRef = useRef();

  const handleSelect = () => {
    if (inputRef.current != null) {
      inputRef.current.click();
    }
  };

  const handleUpload = () => {
    
  }

  return (
    <div className="archive">
      <h1>Archive</h1>
      <article>
        <input
          ref={inputRef}
          type="file"
          onChange={(event) => setFile(event.target.files[0])}
        />
        <div className="file-upload">
          <button onClick={handleSelect} className="file-select">
            Select File
          </button>
          <div>{file.name}</div>
          <button className="upload-button">Upload</button>
        </div>

        <section className="explorer-section">
          <div className="top-bar">
            <div className="divider"></div>
            <div className="empty-space"></div>
          </div>
          <div className="file-explorer">
            <div className="side-bar"></div>
            <div className="explorer"></div>
          </div>
        </section>

      </article>
    </div>
  );
};

export default Archive;
