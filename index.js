import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import {todoRoutes} from "./routes/Todo.js";
const PORT = process.env.PORT || 6001
const app =express();

mongoose.connect("" , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
}).then(()=> {
    console.log("connected to db");
});
app.use(cors());
app.use(bodyParser.json());
app.use("/api", todoRoutes);
app.get('/' , (req,res)=> {
    res.json({
        msg: "hello"
    })
})

app.listen(PORT , ()=>{
    console.log(`listen to ${PORT}`);
})