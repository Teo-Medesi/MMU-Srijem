import { useRef, useEffect, useState, createContext } from "react";
import { listAll, ref, uploadBytes } from "firebase/storage"
import { storage } from "../firebase.config" 
import File from "../features/archive/File";
import Folder from "../features/archive/Folder";
import arrow from "../assets/icons/arrow.svg"

export const ArchiveContext = createContext();

const Archive = () => {
  const [files, setFiles] = useState([]);
  const [storagePath, setStoragePath] = useState("/root");
  const [currentFolders, setCurrentFolders] = useState([]);
  const [currentFiles, setCurrentFiles] = useState([]);
  const [isUploading, setIsUploading] = useState(false);
  const inputRef = useRef();

  const [isOverExplorer, setIsOverExplorer] = useState(false);
  const [isDropped, setIsDropped] = useState(false);

  useEffect(() => {
    fetchArchive();
  }, [storagePath])

  useEffect(() => {
    // event listener for drop events
    if (isDropped && files.length != 0) {
      handleUpload();
    }
  }, [files, isDropped])

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
    setIsUploading(true);
    
    if (files)
    {
      files.forEach(file => {
        // the storage reference changes for each file, because in firebase storage we can't upload files to a folder directly, we need a full path.
        const storageRef = ref(storage, `${storagePath}/${file.name}`)

        uploadBytes(storageRef, file)
        .then(() => {
          setIsUploading(false);
          fetchArchive();
        })
        .catch(error => {
          console.error(error);
        });

      })
    }

  }

  const goToPreviousDirectory = () => {
    const storageRef = ref(storage, storagePath);
    setStoragePath(storageRef.parent.fullPath);
  }

  const handleDrop = event => {

    // the default on drop action is to open the file in the browser thefore we prevent it
    // preventing the default drop event is not enough, we also need to prevent the default behaviours of other drag events, which we do in our JSX
    event.preventDefault();
    setIsOverExplorer(false);
    
    if (event.dataTransfer.files)
    {
      // dataTransfer, just like input in HTML, returns a "FileList"
      // FileList is an array like object, but not an array. In order to loop over it we need to convert it to a regular array with Array.from() 
      setFiles(Array.from(event.dataTransfer.files));
      setIsDropped(true);
    }
  }

  return (
    <ArchiveContext.Provider value={{fetchArchive, storagePathState: [storagePath, setStoragePath]}}>
    <div className="archive">
      <h1>Archive</h1>
      <article>
        <input
          ref={inputRef}
          type="file"
          multiple="multiple"
          onChange={(event) => setFiles(Array.from(event.target.files))}
          className="hidden"
        />
        <div className="file-upload">
          <button onClick={handleSelect} className="file-select">
            Select File
          </button>
          <div>{files.map(file => ` ${file.name} `)}</div>
          <button onClick={handleUpload} className="upload-button">Upload</button>
          <span className={isUploading ? "" : "hidden"}></span>
        </div>

        <section className="explorer-section">
          <div className="top-bar">
            <div className="divider"></div>
            <div className="empty-space">
              <input type="text" onChange={event => setStoragePath(event.target.value)} value={storagePath} />
              <img src={arrow} onClick={goToPreviousDirectory} />
            </div>
          </div>

          <div className="file-explorer">
            <div className="side-bar"></div>
            <div onDrop={handleDrop} onDragLeave={event => {event.preventDefault(); setIsOverExplorer(false)}} onDrag={event => event.preventDefault()} onDragOver={event => {event.preventDefault(); setIsOverExplorer(true)}} className={isOverExplorer ? "faded explorer": "explorer"}>
              {currentFolders.map((folderRef, index) => <Folder key={index} folderRef={folderRef} />)}
              {currentFiles.map((fileRef, index) => <File key={index} fileRef={fileRef} />)}
            </div>

          </div>
        </section>

      </article>
    </div>
    </ArchiveContext.Provider>
  );
};

export default Archive;
