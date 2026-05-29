// export const getNotes = (req, res) => {
//     res.status(200).send("Hello world");
// };
export function getNotes (req, res) {
    res.status(200).send("Hello world");
} //we can also write it like this, both are same, just different syntax

export function createNote (req, res) {
    res.status(201).send("Note created successfully");
}

export function updateNote (req, res) {
    res.status(200).json({ message: "Note updated successfully" });
}

export function deleteNote (req, res) {
    res.status(200).json({ message: "Note deleted successfully" });
}