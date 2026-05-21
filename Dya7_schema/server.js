const express = require('express')
//database se connect karne ke liye hamne ek alag file banayi hai jiska naam db.js hai aur usme hamne mongoose ka use karke apne database se connect kiya hai
const connectDB = require('./src/db/db')
const NoteModel = require('./src/model/note.model')

connectDB();




const app = express();

app.use(express.json() )

//yha hame find api banani hai jisme ham NoteModel ka use karke apne database se data ko fetch karenge. Jab bhi koi request aati hai /notes endpoint par, to ham NoteModel.find() method ka use karke database se sabhi notes ko fetch karte hain aur unhe json response ke roop me bhejte hain jisme message hota hai "Notes fetched successfully" aur notes hota hai jo database se fetch kiye gaye notes hote hain.
app.get('/notes',async(req,res)=>{
    const notes = await NoteModel.find();
    res.json({
        message:"Notes fetched successfully",
        notes
    });
})



// we can create a post api
// jab bhi hamare paas koi aisi request aati hai jisme data hota hai jo database me store karna hota hai, to ham server me defined schema ka use karke data ko validate kar sakte hain before saving it. Isse ensure hota hai ki sirf valid aur properly structured data hi database me store hota hai. Yaha hamne ek post api banayi hai jisme ham NoteModel ka use karke apne database me data ko create kar rahe hain. Jab bhi koi request aati hai /notes endpoint par, to ham title aur content ko req.body se lete hain aur NoteModel.create() method ka use karke database me ek naya note create karte hain. Agar note successfully create ho jata hai, to ham ek json response bhejte hain jisme message hota hai "Note created successfully". 
app.post("/notes", async (req, res) => {
    try {
        const { title, content } = req.body;

        const newNote = await NoteModel.create({
            title,
            content
        });

        res.status(201).json({
            message: "Note created successfully",
            note: newNote
        });

    } catch (error) {
        res.status(500).json({
            message: "Error creating note",
            error: error.message
        });
    }
});

//delete operation findoneid and delete
app.delete("/notes/:id",async(req,res)=>{
    const notesid = req.params.id;
    await NoteModel.findOneAndDelete({_id:notesid})
    res.json({
        message:"Note deleted successfully"
    })
})

//update operation findoneid and update 
app.patch("/notes/:id",async(req,res)=>{
    const notesid = req.params.id;
    const {title,content} = req.body;
    await NoteModel.findOneAndUpdate({_id:notesid},{
        title:title,
        content:content 
    })
    res.json({
        message:"Note updated successfully"
    })
})




app.listen(3000,()=>{
    console.log('Server is running on port 3000')
})