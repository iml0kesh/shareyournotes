const Note = require("../models/noteModel");
const User = require("../models/userModel");

// Get All Notes
const getAllNotes = async (req, res) => {
  try {
    const data = await Note.find();
    res.json(data);
  } catch (error) {
    console.log(error);
  }
};

// Create a Note
const createNote = async (req, res) => {
  try {
    const { title, content, userId } = req.body;
    const newNote = new Note({
      title,
      content,
      userId,
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
    notes.user;
    res.json(notes);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Something went wrong", error: err.message });
  }
};

const deleteNote = async (req, res) => {
  try {
    console.log("Here");
    await Note.findByIdAndDelete(req.params.id);
    res.json({ msg: "Note Deleted" });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

const updateNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    await Note.findByIdAndUpdate(
      { _id: req.params.id },
      {
        title,
        content,
      }
    );
    res.json({ msg: "Updated a Note" });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

const getNote = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    res.json(note);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getAllNotes,
  createNote,
  getUserNotes,
  deleteNote,
  updateNote,
  getNote,
};
