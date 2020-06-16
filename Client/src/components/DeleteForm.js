import React from 'react'

// import external stylesheet
import './styles/DeleteForm.css'

// React Bootstrap
import Button from 'react-bootstrap/Button'

const DeleteForm = ({ id, deleted }) => {
    // props id and deleted will be passed in the parent component
    return (
        <>
            <div 
                className="deleteTitle"
            >
                <h3>Delete Your List of Web Projects</h3>
            </div>
            
            <form>
                <div
                    className="deleteForm"
                >
                    <div
                        className="deleteInfo"
                    >
                        <label className="deleteLabel">ID:</label>
                        <input
                            onChange={id}
                            placeholder="Choose an ID"
                            required
                            className="deleteInput"
                        />
                    </div>

                </div>

                <div
                    className="deleteButton"
                >
                    <Button
                        variant="danger"
                        type="submit"
                        onClick={deleted}
                    >
                        Delete
                    </Button>
                </div>
            </form>
        </>        
    )
}

export default DeleteForm
