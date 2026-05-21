const express = require('express')

const app = express()

app.use(express.json())


const notes=[]


//we can use get method to get all the notes from the server
app.get('/notes',(req,res)=>{
    res.json(notes)
})

//we can use post method too get new data from the server 
app.post('/notes',(req,res)=>{
    const note = req.body

    notes.push(note)

    res.json({
        message:'Note added successfully',
        notes:notes   // full array send
    })
})
//we can also add a delete route to delete a note by its index
app.delete('/notes/:index',(req,res)=>{
    const index=req.params.index
    delete notes[index]
    res.json({message:'Note deleted successfully'})
})

//patch method to update a note by its index

app.patch('/notes/:index',(req,res)=>{
    const index = req.params.index
    const {title} = req.body
    notes[index].title = title
    res.json({message:'Note updated successfully', note:notes[index]})
})



app.listen(3000,()=>{
    console.log('Server is running on port 3000')
})
