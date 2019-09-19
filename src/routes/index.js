import { Router } from "express";
import shortid from "shortid";
import users from "../data";
const router = Router();

// create a user
router.post("/", (req, res) => {
  const { username, first_name, last_name, position } = req.body;

  users.push({
    id: shortid.generate(),
    username,
    first_name,
    last_name,
    position
  });

  res.status(201).json({ error: false, users });
});

// get all users
router.get("/", (req, res) => {
  res.json({ users });
});

// delete a user
router.delete("/:username", (req, res) => {
  const { username } = req.params;

  const index = users.findIndex(user => user.username === username);

  if (index !== -1) {
    users.splice(index, 1);

    res.json({ users });
  } else {
    res.status(500).json({ error: true, message: "Unable to delete the user" });
  }
});

export default router;
