import React,{useState} from 'react'
import {useDispatch} from 'react-redux';
import { deleteTodo, updateTodo } from '../redux/action';


function TodoItem({todo}) {
    const [editable,setEditable] = useState(false);
    const [name,setName] = useState(todo.name);
    let dispatch = useDispatch();
    return (
        <div className="row container mx-auto ">
            <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
            <h1>&nbsp;</h1>
            <h4>#{todo.id.length >1 ? todo.id[2] : todo.id}#</h4>
            {
                editable ?  <input type="text" value={name} onChange={(e)=> {
                    setName(e.target.value);
                }} /> : <h4>{todo.name}</h4> 
            }
            <button className=" col btn btn-primary m-2 mx-1" onClick={() => {
                dispatch(updateTodo({
                    ...todo, 
                    name:name 
                }));
                
                setEditable(!editable);                
            }}>
                {editable?'Update':'Edit'}</button>
            <button className=" col btn btn-danger m-2 mx-1" onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
        </div>
    )
}

export default TodoItem