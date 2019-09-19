"use strict";

var _server = _interopRequireDefault(require("./server"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const PORT = process.env.PORT || 4000;

_server.default.listen(PORT, () => {
  console.info(`--Server is on port ${PORT}--`);
});