const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const myNotes = require("../middleware/myNotes");

const {
  getAllNotes,
  createNote,
  getUserNotes,
  updateNotes,
  deleteNote,
} = require("../controllers/noteCtrl");

const { userVerify } = require("../controllers/userCtrl");

// Create a Notes.
router.post("/createNote", auth, createNote);

// Get All Notes.
router.get("/notes", getAllNotes);

// Get User Notes.
router.get("/usr", myNotes, getUserNotes);

// // Update A Notes.
// router.put("/:id", auth, updateNotes);

// Delete a Notes.
router.delete("/:id", auth, deleteNote);

module.exports = router;
