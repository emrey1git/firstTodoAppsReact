import { useState } from 'react'
import './App.css'
import TodoHeader from './TodoApp/TodoHeader';
import TodoForm from './TodoApp/TodoForm';
import TodoList from './TodoApp/TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  const [searchText, setSearchText] = useState("");
  const addTodo= (text)=>{
    const  newTodo={
      id: Date.now(),
      text: text
    }
    setTodos([...todos, newTodo])
  }

  const deleteTodo = (id) =>{
    setTodos(todos.filter(todos => todos.id !== id))
  }
  const filteredTodos = todos.filter(todo => todo.text.toLowerCase().includes(searchText.toLowerCase()))
  return (
    <>
      <TodoHeader searchText={searchText} setSearchText={setSearchText}/>
      <TodoForm addTodo={addTodo} />
      <TodoList  filteredTodos={filteredTodos} deleteTodo={deleteTodo}/>
    </>
  )
}

export default App
