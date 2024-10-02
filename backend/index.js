import express from "express";
import { PORT } from "./config.js";

const app = express();

app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send('tutorial time');
});

app.listen(PORT, () => {
    console.log(`Yeah it works on port: ${PORT}`);
});