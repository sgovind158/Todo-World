import React from 'react'
import { Todo } from './models/model'
import { AiFillEdit,AiFillDelete } from 'react-icons/ai';
import { MdOutlineDone } from 'react-icons/md';
interface Props{
  todos :Todo[];
  todo : Todo;
  setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo :React.FC<Props>= ({todos,todo,setTodos}) => {

  const handleDone = (id:number)=>{
         setTodos(
          todos.map((todoObj)=>  todoObj.id === id ? {...todoObj,isDone : !todoObj.isDone } : todoObj
          )
         )
  }

  const handleDelete = (id: number)=>{
    let newTodos = todos.filter((todoObj)=> todoObj.id !== id)
    setTodos(newTodos)
  }
  return (
    <form className='todos_single'>

     {todo.isDone ?(
      <s className='todos_single_text'>{todo.todo}</s>
     ) : (
<span className='todos_single_text'>{todo.todo}</span>
     )}
      
      <div>
        <span className='icon'>
        <AiFillEdit/>
        </span>
        
      </div>

      <div>
        <span className='icon'>
        <AiFillDelete onClick={()=>handleDelete(todo.id)}/>
        </span>
       
      </div>

      <div>
        <span className='icon'>
        <MdOutlineDone onClick={()=>handleDone(todo.id)}/>
        </span>
        
      </div>
      
    </form>
  )
}

export default SingleTodo
