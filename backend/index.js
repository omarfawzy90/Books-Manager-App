import express, { request } from "express";
import mongoose from "mongoose";
import {PORT, MONGODB_URI} from "./config.js";
import booksRoutes from "./routes/booksRoutes.js";
import cors from "cors";

const app = express();

//Middlewares
app.use(express.json()); 
app.use(express.urlencoded({extended: true}));
app.use(cors());

// Main page
app.get("/", (req,res) => {
  res.send("Hello to the Book Store");
})


//Routes 
app.use("/books", booksRoutes);


//Port and DB connection
mongoose
.connect(MONGODB_URI)
.then(() => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
})
.catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
