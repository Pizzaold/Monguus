import express, { Express, Request, Response } from "express";
import bodyParser from 'body-parser';
import mongoose from "mongoose";
import articleController from "./controllers/articleController";
import commentController from "./controllers/commentController";

const app = express();


mongoose.connect("mongodb+srv://Pizzaold:idontknow@cluster0.lcygjxv.mongodb.net/");
const database = mongoose.connection;

app.use(express.json());
app.use(articleController);
app.use(commentController);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

database.on('error', (error) => {
  console.log(error)
})

database.once('connected', () => {
  console.log('Database Connected');
})

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(3000, () => {
  console.log(`[server]: Server is running at http://localhost:3000`);
});
