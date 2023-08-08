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
    res.status(201).json({ msg: "U made it bro 😍", savedNote });
  } catch (err) {
    res.status(400).json({ msg: "Something went wrong", err });
  }
};

const getAllNotes = async (req, res) => {
  try {
    const note = await Note.find();
    res.status(200).json([{ note }]);
  } catch (err) {
    res.status(400).json({ msg: "Something went wrong", err });
  }
};

const getUserNotes = async (req, res) => {
  try {
    const { id } = req.params;
    const note = await Note.find({ userId: id });
    res.status(200).json([{ note }]);
  } catch (err) {
    res.status(400).json({ msg: "Something went wrong", err });
  }
};

const updateUserNote = async (req, res) => {
  try {
    const { id} = req.params;
    const note = await Note.findOne;
  } catch (err) {
    res.status(400).json({ msg: "Something went wrong", err });
  }
};

module.exports = { createNote, getAllNotes, getUserNotes };
