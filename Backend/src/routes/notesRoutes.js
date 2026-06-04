import express from "express"
import {getNotes} from "../Controller/notesController.js";
import {createNote} from "../Controller/notesController.js";
import {updateNote} from "../Controller/notesController.js";
import {deleteNote} from "../Controller/notesController.js";

const router = express.Router();

router.get("/", getNotes);
router.post("/", createNote);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);

export default router;