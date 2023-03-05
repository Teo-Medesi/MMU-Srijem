import fileIcon from "../../assets/icons/file.svg"
import imageIcon from "../../assets/icons/image.svg"
import audioIcon from "../../assets/icons/audio.svg"

const Icon = ({name}) => {

    const isImage = /.jpg|.jpeg|.png|.gif|.psd|.raw|.pdf|.psd|.svg/i.test(name); 
    const isAudio = /.wav|.mp3|.aac|.m4a/i.test(name);

    if (isImage)
    {
        return <img src={imageIcon} />
    }
    else if (isAudio)
    {
        return <img src={audioIcon} />
    }
    else {
        return <img src={fileIcon} />
    }
}

const File = ({fileRef}) => {
  return (
    <div className="file">
        <Icon name={fileRef.name} />
        <p>{fileRef.name}</p>
    </div>
  )
}

export default File