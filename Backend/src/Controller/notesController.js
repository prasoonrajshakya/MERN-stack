import Note from "../models/Note.js";

// export const getNotes = (req, res) => {
//     res.status(200).send("Hello world");
// };
export async function getNotes(req, res) {
  try {
    const notes = await Note.find(); //fetch all notes from the database using the Note model, this returns a promise so we use await
    res.status(200).json({ notes }); //send the notes as a JSON response with a 200 status code
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching notes", error: error.message }); //if there's an error, send a 500 status code with an error message
    console.error("Error fetching notes:", error); //log the error to the console for debugging
  }
}

export async function createNote(req, res) {
  try {
    const { title, content } = req.body; //extract title and content from the request body
    const note = new Note({ title, content }); //create a new instance of the Note model with the provided title and content

    const savedNote = await note.save();
    res.status(201).json({ note: savedNote });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating note", error: error.message });
    console.error("Error creating note:", error);
  }
}

export async function updateNote(req, res) {
  try {
    const { title, content } = req.body;
    const updatedNote = await Note.findByIdAndUpdate(
      req.params.id,
      { title, content },
      { returnDocument: "after" },
    );

    if (!updatedNote)
      return res.status(404).json({ message: "Note not found" });

    res.status(200).json({ message: "Note updated successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating note", error: error.message });
    console.error("Error updating note:", error);
    res.status(500).json({ message: "Error updating note" });
  }
}

export function deleteNote(req, res) {
  res.status(200).json({ message: "Note deleted successfully" });
}
