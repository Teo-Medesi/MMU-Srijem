import { useState, useContext } from "react";
import DeleteModal from "../../components/DeleteModal"
import fileIcon from "../../assets/icons/file.svg";
import imageIcon from "../../assets/icons/image.svg";
import audioIcon from "../../assets/icons/audio.svg";
import closeIcon from "../../assets/icons/close.svg";
import { deleteObject } from "firebase/storage";
import { ArchiveContext } from "../../pages/Archive";

const Icon = ({ name }) => {
  const isImage = /.jpg|.jpeg|.png|.gif|.psd|.raw|.pdf|.psd|.svg/i.test(name);
  const isAudio = /.wav|.mp3|.aac|.m4a/i.test(name);

  if (isImage) {
    return <img src={imageIcon} />;
  } else if (isAudio) {
    return <img src={audioIcon} />;
  } else {
    return <img src={fileIcon} />;
  }
};

const File = ({ fileRef }) => {
  const [isDeleteModalActive, setIsDeleteModalActive] = useState(false);
  const {fetchArchive} = useContext(ArchiveContext);

  const onDelete = () => {
    setIsDeleteModalActive(false);
    
    deleteObject(fileRef).then(() => {
        fetchArchive();
    }).catch(error => {
        console.error(error);
    })
  };

  return (
    <div className="file">
      <DeleteModal
        onDelete={onDelete}
        isActiveProp={[isDeleteModalActive, setIsDeleteModalActive]}
      />
      <div>
        <Icon name={fileRef.name} />
        <p>{fileRef.name}</p>
      </div>
      <img onClick={() => setIsDeleteModalActive(true)} src={closeIcon} className="close" />
    </div>
  );
};

export default File;
