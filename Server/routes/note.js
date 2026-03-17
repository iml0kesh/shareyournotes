import { Router } from "express";
import auth from "../middleware/auth.js";
import myNotes from "../middleware/myNotes.js";

import noteCtrl from "../controllers/noteCtrl.js";

const {
  getAllNotes,
  createNote,
  getUserNotes,
  updateNote,
  deleteNote,
  getNote,
} = noteCtrl;

const router = Router();

// Create a Notes.
router.post("/createNote", myNotes, createNote);

// Get All Notes.
router.get("/notes", auth, getAllNotes);

// Get User Notes.
router.get("/usr", myNotes, getUserNotes);

// Get Note
router.get("/:id", myNotes, getNote);

// Update A Notes.
router.put("/edit/:id", myNotes, updateNote);

// Delete a Notes.
router.delete("/delete/:id", myNotes, deleteNote);

export default router;
