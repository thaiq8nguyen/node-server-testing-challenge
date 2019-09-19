"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _shortid = _interopRequireDefault(require("shortid"));

var _data = _interopRequireDefault(require("../data"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = (0, _express.Router)(); // create a user

router.post("/", (req, res) => {
  const {
    username,
    first_name,
    last_name,
    position
  } = req.body;

  _data.default.push({
    id: _shortid.default.generate(),
    username,
    first_name,
    last_name,
    position
  });

  res.status(201).json({
    error: false,
    users: _data.default
  });
}); // get all users

router.get("/", (req, res) => {
  res.json({
    users: _data.default
  });
}); // delete a user

router.delete("/:username", (req, res) => {
  const {
    username
  } = req.params;

  const index = _data.default.findIndex(user => user.username === username);

  console.log(index);

  if (index !== -1) {
    _data.default.splice(index, 1);

    res.json({
      users: _data.default
    });
  } else {
    res.status(500).json({
      error: true,
      message: "Unable to delete the user"
    });
  }
});
var _default = router;
exports.default = _default;