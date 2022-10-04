import React from 'react'
import { Todo } from './models/model';
import SingleTodo from './SingleTodo';

interface props {
    todos : Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}
const TodosList:React.FC<props> = ({todos ,setTodos}) => {
  return (
    <div>
        {
            todos.map((el)=>{
                return(
                    <li>{el.todo}</li>
                )
               
            })
        }
     
    </div>
  )
}

export default TodosList
