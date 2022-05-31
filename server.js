import express from "express";
import mongoose from "mongoose";    
import cors from "cors"; 
import dotenv from "dotenv";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port: `, PORT));