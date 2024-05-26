import express, { Application, Response,NextFunction } from 'express';
import cors from 'cors'; 
import router from './routes';
import path from 'path';
import bodyParser from 'body-parser';
require("dotenv").config({ path: "./.env" });
require('./db/connecing')

const app: Application = express();
const PORT = process.env.PORT || 4001

app.use(express.json());
app.use(bodyParser.json());
app.use(cors({origin:`${process.env.URL_CLIENT}`}));

app.use('/api',router)



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});