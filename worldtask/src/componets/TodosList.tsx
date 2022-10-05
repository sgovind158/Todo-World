import React from 'react'
import { Todo } from './models/model';
import SingleTodo from './SingleTodo';
import "./styles.css"

interface props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
 
}
const TodosList:React.FC<props> = ({todos ,setTodos}) => {
  return (

    <div className='container'>
      
    <div className="todos_div">
    {/* <span className="todos_heading1"> Tasks</span> */}
      
      {/* map here */}
            {todos?.map((todo) => (
        <SingleTodo
          todos={todos}
          todo={todo}
          key={todo.id}
          setTodos={setTodos}
        />
      ))}
    </div>



    </div>
  );
}

export default TodosList
