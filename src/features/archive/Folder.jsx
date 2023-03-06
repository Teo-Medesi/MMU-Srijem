import folderLogo from "../../assets/icons/folder.svg"
import closeIcon from "../../assets/icons/close.svg"

const Folder = ({folderRef}) => {
  return (
    <div className="folder"> 
        <div>
          <img src={folderLogo} />
          <p>{folderRef.name}</p>
        </div>

        <img src={closeIcon} className="close"/>
    </div>
  )
}

export default Folder