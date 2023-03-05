import { useRef, useEffect, useState } from "react";
import { listAll, ref } from "firebase/storage"
import { storage } from "../firebase.config" 
import File from "../features/archive/File";
import Folder from "../features/archive/Folder";

const Archive = () => {
  const [file, setFile] = useState(0);
  const [storagePath, setStoragePath] = useState("/");
  const [currentFolders, setCurrentFolders] = useState([]);
  const [currentFiles, setCurrentFiles] = useState([]);
  const inputRef = useRef();

  useEffect(() => { 
    fetchArchive();
  }, []);

  const fetchArchive = () => {
    const storageRef = ref(storage, storagePath);
    listAll(storageRef).then(res => {
      // folders in firebase storage are labeled as prefixes and files are labeled as items
      setCurrentFolders(res.prefixes);
      setCurrentFiles(res.items);
    })
  }

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
            <div className="empty-space">
              {storagePath}
            </div>
          </div>

          <div className="file-explorer">
            <div className="side-bar"></div>
            
            <div className="explorer">
              {currentFolders.map((folderRef, index) => <Folder key={index} folderRef={folderRef} />)}
              {currentFiles.map((fileRef, index) => <File key={index} fileRef={fileRef} />)}
            </div>

          </div>
        </section>

      </article>
    </div>
  );
};

export default Archive;
