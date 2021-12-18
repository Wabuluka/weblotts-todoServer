const express = require('express');
const router = express.Router();

const { 
    createTodo, 
    getTodoById, 
    getTodo, 
    deleteTodo,
    getAllTodos,
    updateTodo
} = require('../controllers/Todo');

//params
// it will fetch the value from the url
router.param('todoId', getTodoById);

//to get all todos
router.get('/todos/', getAllTodos);

// to get single todo
router.get('/todos/:todoId', getTodo);

// to create a todo
router.post('/todos', createTodo);

//to update the todo
router.put('/todos/:todoId/update', updateTodo);

// to delete todo
router.delete('/todos/:todoId/delete', deleteTodo);


// export the router to import it in the server.js
module.exports = router;