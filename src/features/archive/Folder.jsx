import folderLogo from "../../assets/icons/folder.svg"

const Folder = ({folderRef}) => {
  return (
    <div className="folder"> 
        <img src={folderLogo} />
        <p>{folderRef.name}</p>
    </div>
  )
}

export default Folder