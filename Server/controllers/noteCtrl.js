const Note = require("../models/noteModel");
const User = require("../models/userModel");

// Create a Note
const createNote = async (req, res) => {
  try {
    const { title, notes } = req.body;
    const newNote = new Note({
      title,
      notes,
      userId: req.user.id,
    });

    await newNote.save();
    res.status(201).json({ msg: "Note Saved" });
  } catch (err) {
    res.status(500).json({ msg: "Something went wrong", err });
  }
};

// All Notes in Database of a particular {User}
const getAllNotes = async (req, res) => {
  const notes = await Note.find({ userId: req.user.id });
  res.json(notes);
  res.send("Hello i am under water");
};

// Delete Note with id
const deleteNote = async (req, res) => {
  try {
    await Note.findByIdAndDelete(req.params.id);
    res.json({ msg: "Note Deleted" });
  } catch (err) {
    return res.status(500).json({ msg: error.message });
  }
};

//
const updateUserNote = async (req, res) => {
  try {
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

module.exports = { createNote, getAllNotes, getUserNotes };
