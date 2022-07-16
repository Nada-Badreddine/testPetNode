import express from 'express';
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from 'dotenv';
import Pet from './models/pet'
import Category from './models/category'
import Tag from './models/tag'
import appRoutes from './appRoutes';

const app = express();

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(cors());

dotenv.config();
const PORT = process.env.APPLICATION_PORT || 4000;
const DB_URL = process.env.DB_URL;

appRoutes(app);

  app.listen(PORT, () => {
    mongoose.connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`🚀 application ready at ${PORT}`);
  });