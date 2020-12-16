import React,{useState} from 'react'; 
import {addTodo} from '../redux/action';
import {v1 as uuid} from 'uuid';
import {useDispatch} from 'react-redux';

function TodoInput() {
    let [name,setName] = useState();
    let dispatch = useDispatch();
    return (
        <div className="container">
            <h1>Todo Input</h1>  
            <div className="row m-2 ">
                <input type="text" className="col form-control " value={name} onChange={(e) => setName(e.target.value)} />
                <button className="col   btn btn-primary" onClick={() => {
                    dispatch(addTodo({
                        id:uuid(),
                        name:name
                    })); 
                    setName(' ');
                }}>Add</button>
              
            </div>          
        </div>
    )
}

export default TodoInput
