import express from "express";
import routes from "./routes";

const server = express();
server.use(express.json());

server.use("/api/users", routes);

export default server;
