import React,{useEffect} from "react";
import {v4 as uuid4} from 'uuid';
const Form = ({input,setInput,todos,setTodos,EditTodo,setEditTodo}) =>{

    const updateTodo = (title,id,complete) =>{
        const newTodo = todos.map((todo)=>
            todo.id === id ? {title,id,complete} :todo
        );
        setTodos(newTodo);
        setEditTodo("");
    }
    useEffect(()=> {
        if(EditTodo){
            setInput(EditTodo.title)
        }
        else{
            setInput("");
        }
    }, [setInput,EditTodo]);

    const oninputChange = (e) => {
        setInput(e.target.value);
    }
    const onFormSubmit = (e) =>{
        e.preventDefault();
        if(!EditTodo){
            setTodos([...todos,{id:uuid4(),title:input,complete:false}]);
        setInput("");
        }
        else{
            updateTodo(input,EditTodo.id,EditTodo.complete)
        }
    }

    return(
        <form onSubmit={onFormSubmit}>
            <input type="text" placeholder="enter a note" className="task-input" value={input}
            onChange={oninputChange}
            />
            <button className="button-add" type="submit">{EditTodo ? "Update" : "Add"}</button>
        </form>
    )
}
export default Form;