import "../assets/css/main.scss"

const DeleteModal = ({isActiveProp, onDelete}) => {
  const [isActive, setIsActive] = isActiveProp;
  
  const handleDelete = () => {
    if (onDelete != null)
    {
      onDelete();
    }
    else {
      console.error("onDelete is undefined!")
    }
  }

  return (
    <div className={"delete-modal" + (isActive ? "": " hidden")}>
        <div className="modal"> 
            <h1>Are you sure?</h1>
            <h3>Are you sure you want to delete this item?</h3>
            <div className="button-section">
                <button onClick={handleDelete} className="yes-button">Yes</button>
                <button onClick={() => setIsActive(false)} className="no-button">No</button>
            </div>
        </div>
    </div>
  )
}

export default DeleteModal