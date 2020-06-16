const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const fs = require('fs')

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
// require env
require('dotenv').config()

let content = JSON.parse((fs.readFileSync('data/items.json')))
console.log(content)
app.get('/api', (req,res) => {
    res.json(
        content
        // I removed the { } here so I can just have the array of items itself being sent to my front end so I can map over them as expected in the future
    )
    console.log(content)
    console.log(process.env.PORT)
})
// about end point 
app.get('/names', (req,res)=>{
    res.status(200).json({
        
    })
})
// Get specific data
app.get('/api/:id', (req, res)=>{
    const id = req.params.id * 1
    // using high order array methods
    const item = content.find( (el) => el.id == id)
    // grab the current if
    if(item){
        // test if its present
        res.status(200).json({
            status: 'success',
            data: {
                item
            }
        })
    } else {
        // handle error
        res.json({
            "message": `item ${id} does not exist 😁`
        })
    }
    console.log(id)
})

// Delete Route
app.delete('/api/:id', (req,res)=> {
    const id = req.params.id * 1
    console.log(id)
    const item = content.find( (el) => el.id == id)
    // grab the item itself
    const update = content.filter(item => item.id != id)
    // update the array
    console.log(update)
    if(!item) {
        console.log({"message": `${id} does not exist `})
    } else {
        content = update
        console.log("We have updated the array ")
        fs.writeFile('data/items.json', JSON.stringify(content), (err) => {
            res.status(201).json({
                status: 'success',
                data: {
                    content
                }
            })
        })
    }
    console.log(item)
})
// post data
app.post('/api/add',(req,res)=> {
    const newId = content[content.length - 1].id + 1
    const newPost = Object.assign({id: newId}, req.body)
    content.push(newPost)
    console.log(content)
    // write to the file ?? 
    fs.writeFile('data/items.json', JSON.stringify(content), (err) => {
        res.status(201).json({
            status: 'success',
            data: {
                content
            }
        })
    })
})

app.get('/contact', (req,res) => {
    res.send(`<h1> We are from the contact </h1>`)
    console.log(" contact page")
})
const PORT = process.env.PORT 
app.listen(PORT, () =>{
    console.log("We are on the port " + PORT)
})