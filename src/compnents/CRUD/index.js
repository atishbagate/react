import React,{useState,useEffect} from 'react'
import Form from "./Form"
import TodoList from './TodoList';
import './App.css'
function Index() {

    // to store Data inside Local Storage 
    const initialState = JSON.parse(localStorage.getItem("todos"))||[];
    const [input,setInput] = useState(initialState);  
    const [todos,setTodos] = useState([]);
    const [EditTodo,setEditTodo] = useState(null);

    // function to store Data iside local Storage 
    useEffect(()=>{
        localStorage.setItem("todos",JSON.stringify(todos));
    },[todos]);
  return (
      <>
    <h2 className='Headings'>CRUD TODO Application</h2>
    <Form 
        input={input}
        setInput={setInput}
        todos={todos}
        setTodos={setTodos}
        EditTodo={EditTodo}
        setEditTodo={setEditTodo}
    />
    <h4>List</h4>
    <TodoList todos={todos} setTodos={setTodos} setEditTodo={setEditTodo}/>
    </>
  )
}

export default Index