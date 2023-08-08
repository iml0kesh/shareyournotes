const express = require("express");
const router = express.Router();
const { createNote, getAllNotes, getUserNotes } = require("../controller/note");

// Create a Notes.
router.post("/createNote", createNote);

// Get All Notes.
router.get("/notes", getAllNotes);

// Get a Unique Notes.
router.post("/:id/notes", getUserNotes);

// Update A Notes.

// Delete a Notes.

//

// CRUD

module.exports = router;
