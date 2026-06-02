import mongoose from "mongoose";

//1-Create a schema for the Note model, which defines the structure of the documents in the MongoDB collection
//2-Model based off of that schema, which provides an interface to interact with the database (e.g., creating, reading, updating, deleting notes)

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
},
    {timestamps: true} //automatically add createdAt and updatedAt fields to the schema
);

const Note = mongoose.model("Note", noteSchema);
export default Note;