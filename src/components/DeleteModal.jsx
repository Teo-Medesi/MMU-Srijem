import "../assets/css/main.scss"

const DeleteModal = ({isActive, onDelete}) => {
  return (
    <div className="delete-modal">
        <div className="modal">
            <h1>Are you sure?</h1>
            <h3>Are you sure you want to delete this item?</h3>
            <div className="button-section">
                <button className="yes-button">Yes</button>
                <button className="no-button">No</button>
            </div>
        </div>
    </div>
  )
}

export default DeleteModal