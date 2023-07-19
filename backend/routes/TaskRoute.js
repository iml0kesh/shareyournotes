const { Router } = require("express");
const {
  getNotes,
  saveNote,
  deleteNote,
  updateNote,
} = require("../controllers/TaskControllers");

const router = Router();

router.get("/", getNotes);
router.post("/save", saveNote);
router.put("/update/:id", updateNote)
router.delete("/delete/:id", deleteNote)

module.exports = router;
