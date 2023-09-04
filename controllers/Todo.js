import Todo from "../models/Todo";

export const getTodoById = async(req,res,next ,todoId)=>{
    Todo.findById(todoId).exec((err ,todo) => {
        if(err || !todo) {
            return res.status(400).json({
                error: "todo not found",
            });
        }
        req.todo =todo;
        next();
    });
};

export const getAllTodos =(req,res) =>{
    Todo.find().sort("-createdAt").exec((err, todos)=>{
        if(err ,!todos) {
            return res.status(400).json({
                error: "Unsuccesful",
            });
        }

        res.json(todos);
    });
};