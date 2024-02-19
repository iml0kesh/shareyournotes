const express = require("express");
const router = express.Router();
const auth = require("../middleware/checkLogin");
const {
  createNote,
  getAllNotes,
  getUserNotes,
} = require("../controllers/noteCtrl");

// Create a Notes.
router.post("/createNote", auth, createNote);

// Get All Notes.
router.get("/notes", auth, getAllNotes);

// Get a Unique Notes.
router.post("/:id/notes", getUserNotes);

// Update A Notes.

// Delete a Notes.

//

// CRUD

module.exports = router;
