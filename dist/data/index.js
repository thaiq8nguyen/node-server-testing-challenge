"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _shortid = _interopRequireDefault(require("shortid"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = [{
  id: _shortid.default.generate(),
  username: "tnguyen",
  first_name: "Thai",
  last_name: "Nguyen",
  position: "student"
}, {
  id: _shortid.default.generate(),
  username: "ale",
  first_name: "Amy",
  last_name: "Le",
  position: "staff"
}, {
  id: _shortid.default.generate(),
  username: "tsmith",
  first_name: "Tim",
  last_name: "Smith",
  position: "staff"
}, {
  id: _shortid.default.generate(),
  username: "wmitchell",
  first_name: "Will",
  last_name: "Mitchell",
  position: "admin"
}];
exports.default = _default;