import React from 'react'

// import external stylesheet
import './styles/WebForm.css'

// React Bootstrap
import Button from 'react-bootstrap/Button' 



const WebForm = ({ title, description, post }) => {
    // this too will take props from the Parent component that will be changed based on the functions we will run that will set the state
    return (
        <>
            <div 
                className="formTitle"
            >
                <h3>Create Your List of Web Projects</h3>
            </div>

            <form
                onSubmit={post}                
            >
                <div
                    className="form"
                >
                    <div className="formInfo">
                        <label className="formLabel">Title:</label>
                        <input
                            onChange={title}
                            placeholder="Add a title"
                            required
                            className="formInput"
                        />
                    </div>

                    <div className="formInfo">
                        <label className="formLabel">Description:</label>
                        <input 
                            onChange={description}
                            placeholder="Add a description"
                            required
                            className="formInput"
                        />
                    </div>
                </div>

                <div
                    className="formButton"
                >
                    <Button
                        variant="success"
                        type="submit"
                    >
                        Create
                    </Button>

                </div>
            </form>
        </>        
    )
}

export default WebForm
