import express from "express";
import config from "./config.js";
import mongoose from "mongoose";
import booksRoute from "./routes/booksRoute.js";

const PORT = config.port;
const CONNECTION = config.connection;

const app = express();

app.use(express.json());

app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send('tutorial time');
});

app.use('/books', booksRoute);

mongoose
    .connect(CONNECTION)
    .then(() => {
        console.log("App connected to database success");
        app.listen(PORT, () => {
            console.log(`Yeah it works on port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });