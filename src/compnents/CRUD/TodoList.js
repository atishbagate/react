// to display to do list item 
import React from 'react'

const TodoList = ({todos,setTodos,setEditTodo}) => {
    const handleDelete = ({id}) =>{
        setTodos(todos.filter((todo)=>todo.id !== id));
    }
    const handleComplete = (todo) => {
        setTodos(
            todos.map((item) => {
                if(item.id === todo.id){
                    return {...item, complete: !item.complete}
                } 
                return item; 
            })
        )
    }
    const handleEdit = ({id}) =>{
        const findTodo = todos.find((todo)=> todo.id === id);
        setEditTodo(findTodo);
    }
  return (
    <>
    <div>
        {todos.map((todo)=>(
            <li className='todo-list' key={todo.id}>
                <input type="text" value={todo.title} className={`list ${todo.complete ? "complete":"removeinput"}`} onChange={(e)=>e.preventDefault()}  />
                <div>
                    <button className='button-complete task-button' onClick={()=>handleComplete(todo)}>done</button>
                    <button className='button-edit task-button' onClick={()=>handleEdit(todo)}>edit</button>
                    <button className='button-delete task-button' onClick={()=>handleDelete(todo)}>delete</button>
                </div>
            </li>
        ))}
    </div>
    </>
  )
}

export default TodoList