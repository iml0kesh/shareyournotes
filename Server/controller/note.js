const Note = require("../models/noteModel");

const createNote = async (req, res) => {
  try {
    const { userId, title, notes } = req.body;
    const newNote = new Note({
      userId,
      title,
      notes,
    });
    const savedNote = await newNote.save();
    res.status(201).json({ msg:"U made it bro 😍",savedNote });
  } catch (err) {
    res.status(400).json({ msg: "Something went wrong", err });
  }
};

const getAllNotes = (req, res) => {
  try {
  } catch (err) {
    res.status(400).json({ msg: "Something went wrong", err });
  }
};

const getUserNotes = (req, res) => {
  try {
  } catch (err) {
    res.status(400).json({ msg: "Something went wrong", err });
  }
};

module.exports = { createNote, getAllNotes, getUserNotes };
