import React, { useState } from 'react'
import Todo from './Todo';
import TodoForm from './TodoForm'


function TodoList() {
const [todos, setTodos] = useState([]);

const addTodo = (todo) => {
    if(!todo.text || /^\s*$/.test(todo.text)){
        return;
    }

    const newTodos = [todo, ...todos]

    setTodos(newTodos);
}

const updateTodo = (todoId, newValue) => {
    if(!newValue.text || /^\s*$/.test(newValue.text)){
        return;
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
}

const removeTodo = (id) => {
    const removeArr = [...todos].filter(todo => todo.id !== id)

    setTodos(removeArr);
}

const completeTodo = (id) => {
    let updatedTodos = todos.map(todo => {
        if(todo.id === id){
            todo.isComplete = !todo.isComplete
        }
        return todo;
    });
    setTodos(updatedTodos);
}

  return (
    <div className='todo-app'> 
        <div className='todo-img'>
        <img src="./img/todo.png" alt="React Logo" width="300px" height="200px" />
        </div>
        <h1>Koji su tvoji planovi za danas?</h1>
        <TodoForm onSubmit={addTodo} />
        <Todo todos={todos} completeTodo={completeTodo} updateTodo={updateTodo} removeTodo={removeTodo}/>
    </div>
  )
}

export default TodoList;