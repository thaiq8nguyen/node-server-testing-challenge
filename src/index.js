import server from "./server";

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
    console.info(`--Server is on port ${PORT}--`)
})