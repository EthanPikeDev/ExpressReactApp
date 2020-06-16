import React from 'react'

// import external stylesheet
import './styles/UpdateForm.css'

// React Bootstrap
import Button from 'react-bootstrap/Button'

const UpdateForm = ({ id, title, description, put }) => {
    // these will take props from the parent component ( APP ) that will be changed by those mehods()
    return (
        <>
            <div 
                className="updateTitle"
            >
                <h3>Update Your List of Web Projects</h3>
            </div>

            <form>
                <div
                    className="updateForm"
                >
                    <div
                        className="updateInfo"
                    >
                        <label className="updateLabel">ID:</label>
                        <input
                            onChange={id}
                            placeholder="Choose an ID"
                            required
                            className="updateInput"
                        />
                    </div>

                    <div
                        className="updateInfo"
                    >
                        <label className="updateLabel">Title:</label>
                        <input
                            onChange={title}
                            placeholder="Update title"
                            required
                            className="updateInput"
                        />
                    </div>

                    <div
                        className="updateInfo"
                    >
                        <label className="updateLabel">Description:</label>
                        <input
                            onChange={description}
                            placeholder="Update description"
                            required
                            className="updateInput"
                        />
                    </div>
                </div>

                <div
                    className="updateButton"
                >
                    <Button
                        variant="primary"
                        type="submit"
                        onClick={put}
                    >
                        Update
                    </Button>

                </div>
            </form>
        </>        
    )
}

export default UpdateForm
