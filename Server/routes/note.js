const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const {
  getAllNotes,
  createNote,
  updateNotes,
  deleteNote,
} = require("../controllers/noteCtrl");

// Create a Notes.
router.post("/createNote", auth, createNote);

// Get All Notes.
router.get("/notes", getAllNotes);

// // Update A Notes.
// router.put("/:id", auth, updateNotes);

// Delete a Notes.
router.delete("/:id", auth, deleteNote);

module.exports = router;
