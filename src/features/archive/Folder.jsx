import { useState } from "react"
import DeleteModal from "../../components/DeleteModal"
import folderLogo from "../../assets/icons/folder.svg"
import closeIcon from "../../assets/icons/close.svg"
import { useContext } from "react"
import { ArchiveContext } from "../../pages/Archive"
import { deleteObject } from "firebase/storage"

const Folder = ({folderRef}) => {
  const fetchArchive = useContext(ArchiveContext);

  return (
    <div className="folder"> 
        <div>
          <img src={folderLogo} />
          <p>{folderRef.name}</p>
        </div>
    </div>
  )
}

export default Folder