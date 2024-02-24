const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const {
  getAllNotes,
  createNote,
  getUserNotes,
  updateNotes,
  deleteNote,
} = require("../controllers/noteCtrl");

// Create a Notes.
router.post("/createNote", auth, createNote);

// Get All Notes.
router.get("/notes", getAllNotes);

// Get User Notes.
router.get("/usernotes", getUserNotes);

// // Update A Notes.
// router.put("/:id", auth, updateNotes);

// Delete a Notes.
router.delete("/:id", auth, deleteNote);

module.exports = router;
