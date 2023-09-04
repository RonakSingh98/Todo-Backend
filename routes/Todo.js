import express  from "express";

import {
    createTodo,
    getTodoById,
    getTodo,
    deleteTodo,
    getAllTodos,
    updateTodo,
} from "../controllers/Todo";

const router = express.Router();

// fetch value 
router.param("todoID" , getTodoById);
// get all todos
router.get("/todos/", getAllTodos);
// to get single todo
router.get("/todo/:todoId/" ,getTodo);
// to create a todo
router.post("/todo/create/" , createTodo);
// to update the todo
router.patch("/todo/:todoId/update" , updateTodo);
// to delete a todo
router.delete("/todo/:todoId/delete" , deleteTodo);

export default router;