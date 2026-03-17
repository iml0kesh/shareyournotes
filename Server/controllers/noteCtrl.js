import Note from "../models/noteModel.js";
import User from "../models/userModel.js";

// Get All Notes
const getAllNotes = async (req, res) => {
  try {
    const data = await Note.find();
    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Server error while getting all notes." });
  }
};

// Create a Note
const createNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    // Get userId from the authenticated user (set by auth middleware)
    const newNote = new Note({
      title,
      content,
      userId: req.user.userId, // This comes from myNotes middleware
    });

    await newNote.save();
    res.status(201).json({ msg: "Note Saved" });
  } catch (err) {
    res.status(500).json({ msg: "Something went wrong", err });
  }
};

// Get User Notes
const getUserNotes = async (req, res) => {
  try {
    const notes = await Note.find({ userId: req.user.userId });
    res.json(notes);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Something went wrong", error: err.message });
  }
};

const deleteNote = async (req, res) => {
  try {
    // Ensure the note belongs to the user trying to delete it
    const note = await Note.findOneAndDelete({
      _id: req.params.id,
      userId: req.user.userId,
    });
    if (!note) return res.status(404).json({ msg: "Note not found or user not authorized." });
    res.json({ msg: "Note Deleted" });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

const updateNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    // Ensure the note belongs to the user trying to update it
    const note = await Note.findOneAndUpdate(
      { _id: req.params.id, userId: req.user.userId },
      { title, content },
      { new: true } // Optional: returns the updated document
    );
    if (!note) return res.status(404).json({ msg: "Note not found or user not authorized." });

    res.json({ msg: "Updated a Note" });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

const getNote = async (req, res) => {
  try {
    // Ensure the note belongs to the user requesting it
    const note = await Note.findOne({
      _id: req.params.id,
      userId: req.user.userId,
    });
    if (!note) return res.status(404).json({ msg: "Note not found or user not authorized." });
    res.json(note);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: err.message });
  }
};

export default {
  getAllNotes,
  createNote,
  getUserNotes,
  deleteNote,
  updateNote,
  getNote,
};
