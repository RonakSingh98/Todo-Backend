import mongoose from "mongoose";

const Todo = new mongoose.schema ({
    task: {
        type:String,
        required:true,
    }
},
{timestamps:true});

const task = mongoose.model("Todo" , Todo);
export default Todo;