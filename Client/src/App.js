import React, { useState, useEffect } from 'react'
import './App.css'

// import components
import WebForm from './components/WebForm'
import WebItems from './components/WebItems'
import UpdateForm from './components/UpdateForm'
import DeleteForm from './components/DeleteForm'

const App = () => {
  const [title, setTitle] = useState()
  const [description, setDescription] = useState()
  const [items, setItems] = useState([])
  const [id, setId] = useState()
  // state info, we will have title, description, items, and id

  const titleChange = (e) => {
    const value = e.target.value
    setTitle(value)
  }

  const descriptionChange = (e) => {
    const value = e.target.value
    setDescription(value)
  }

  const idChange = (e) => {
    const value = e.target.value
    setId(value)
  }

  // these methods on above will set the state and change our variables like title, description, items, and id
  const handlePost = async () => {
    // post to the api end point
    try {
      await fetch('/api', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
          // headers of the request is json 
        },
        body: JSON.stringify({ 
          title: title, 
          description: description 
        })
        // send the request back as a json object or string
      })
    } catch (err) {
      console.log(err)
    }
  }
  
  const handlePut = async () => {
    try {
      await fetch(`/api/${id}`, {
        method: "PUT",
        headers: { 
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          title: title, 
          description: description
        })
      })
    } catch (err) {
      console.log(err)
    }    
  }
  
  const handleDelete = async () => {
    try {
      await fetch(`/api/${id}`, {
        method: "DELETE"
      })
    } catch (err) {
      console.log(err)
    }    
  } 
  // The id variable here will be set based on the function idChange which will be sent 

  // methods to interact with the back end

  // componentDidMount
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch('/api')
      const data = await result.json()
      console.log(data)
      setItems(data)
    }
    fetchData()
  }, [])

  return (
    <>
      <WebForm 
        title={titleChange}
        description={descriptionChange}
        post={handlePost}
      />

      <UpdateForm 
        id={idChange}
        title={titleChange}
        description={descriptionChange}  
        put={handlePut}      
      />

      <DeleteForm 
        id={idChange}
        deleted={handleDelete}      
      />

      <WebItems
        items={items}
      />
    </>
  )
}

export default App
