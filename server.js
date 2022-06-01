import express from "express";
import mongoose from "mongoose";    
import cors from "cors"; 
import dotenv from "dotenv";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
dotenv.config();

const PORT = process.env.PORT;
const CONNECTION_URL = ""

app.get("/", (req, res) =>{
    res.send("Hello World!");
});

app.use("/posts", (req, res) => {
    res.send("Posts ...");
});

mongoose.connect(CONNECTION_URL).then(()=>
app.listen(PORT, () => console.log(`Database connected and server running on port: `, PORT),
),
)
.catch((error) => console.log(error));

