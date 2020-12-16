import {ADD_TODO,UPDATE_TODO,DELETE_TODO} from './action.js'; 
import {todos} from './states';

export const reducer = (state = todos,action) => {
    switch(action.type)
    {
        case ADD_TODO:
            let newTodos1 = [...state]; 
            newTodos1.push(action.payload); 
            return newTodos1;
            break;
        case DELETE_TODO:
            let newTodos = [...state]; 
            newTodos = newTodos.filter(todo => todo.id != action.payload);
            return newTodos;
            break;
        case UPDATE_TODO:
            let newTodos2 = [...state];
            let index =-1;
            for(let i=0;i<newTodos2.length;i++)
            {
                index++;
                if(newTodos2[i].id == action.payload.id)
                {
                    break;
                }               
            } 
            if(index !=-1)
            {
                newTodos2[index] = action.payload; 
                return newTodos2;
            }   
            break;
        default:
            return state;       
    }
}