const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const myNotes = require("../middleware/myNotes");

const {
  getAllNotes,
  createNote,
  getUserNotes,
  updateNote,
  deleteNote,
  getNote,
} = require("../controllers/noteCtrl");

const { userVerify } = require("../controllers/userCtrl");

// Create a Notes.
router.post("/createNote", auth, createNote);

// Get All Notes.
router.get("/notes", getAllNotes);

// Get User Notes.
router.get("/usr", myNotes, getUserNotes);

// Get Note
router.get("/:id", auth, getNote);

// Update A Notes.
router.put("/edit/:id", auth, updateNote);

// Delete a Notes.
// router.delete("/:id", auth, deleteNote);

module.exports = router;
