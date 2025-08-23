require('dotenv').config();
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import bodyParser from 'body-parser';

const app = express()

app.use(morgan("tiny"));

app.use(cors());
app.use(bodyParser.json({}));
app.use(bodyParser.urlencoded({}));

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(process.env.PORT, () => {
    console.log("Listening On Port: " + process.env.PORT);

})