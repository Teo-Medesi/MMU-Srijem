import { useContext, useState } from "react"
import { ArchiveContext } from "../../pages/Archive"
import folderLogo from "../../assets/icons/folder.svg"

const Folder = ({folderRef}) => {
  const {storagePathState} = useContext(ArchiveContext);
  const [storagePath, setStoragePath] = storagePathState;

  const [isSelected, setIsSelected] = useState(false);

  const handleDoubleClick = () => {
    setStoragePath(folderRef.fullPath);
  }

  return (
    <div onDoubleClick={handleDoubleClick} onClick={() => setIsSelected(true)} className={isSelected ? "folder faded" : "folder"}> 
        <div>
          <img src={folderLogo} />
          <p>{folderRef.name}</p>
        </div>
    </div>
  )
}

export default Folder