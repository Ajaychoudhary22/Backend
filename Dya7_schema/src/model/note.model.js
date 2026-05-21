// we can create a schema over here and then we can export it to use in our server file


const mongosse = require('mongoose');


const noteSchema = new mongosse.Schema({
    title:String,
    content:String
})

//yha ham model create karenge jiska naam Note hoga aur usme hamne apna schema pass kiya hai

const NoteModel = mongosse.model('Note',noteSchema);

module.exports=NoteModel;
