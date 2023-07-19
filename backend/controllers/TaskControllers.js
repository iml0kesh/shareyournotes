const NoteModel = require("../models/NoteModel");

module.exports.getNotes = async (req, res) => {
  try {
    const notes = await NoteModel.find();
    res.status(200).json(notes);
    res.send("HRLLO THERE");
    } catch (err) {
    console.log(err);
    res.status(500).json({ error: err, msg: "Something went wrong..." });
  }
};


module.exports.saveNote = (req, res) => {
  const { note } = req.body;
  TaskModel.create({ note })
    .then((data) => {
      console.log("Saved");
      res.status(200).send(data);
    })
    .catch((err) => {
      console.log(err);
      res.send({ error: err, msg: "Something went worong..." });
    });
};

module.exports.updateNote = (req, res) => {
  const { id } = req.params;
  const { note } = req.body;
  NoteModel.findByIdAndUpdate(id, { task })
    .then(() => res.send("Updat Success"))
    .catch((err) => {
      console.log(err);
      res.send({ error: err, msg: "Something went worong..." });
    });
};

module.exports.deleteNote = (req, res) => {
  const { id } = req.params;
  NoteModel.findByIdAndUpdate(id)
    .then(() => res.send("Delete Success"))
    .catch((err) => {
      console.log(err);
      res.send({ error: err, msg: "Something went worong..." });
    });
};
