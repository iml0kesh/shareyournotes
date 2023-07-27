const Note = require("../models/noteModel");

const createNote = (req, res) => {
  try {
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
