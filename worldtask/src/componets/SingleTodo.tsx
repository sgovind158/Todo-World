import React, { useRef, useState ,useEffect} from 'react'
import { Todo } from './models/model'
import { AiFillEdit,AiFillDelete } from 'react-icons/ai';
import { MdOutlineDone } from 'react-icons/md';
interface Props{
  todos :Todo[];
  todo : Todo;
  setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo :React.FC<Props>= ({todos,todo,setTodos}) => {

  const [edit,setEdit] = useState<boolean>(false)
  const [editTodo,setEditTodo] = useState<string>(todo.todo)
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(()=>{
    inputRef.current?.focus()

  },[edit])
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

  const handleEdit = (e:React.FormEvent,id:Number)=>{
        e.preventDefault()
let editTodosObj = todos.map((todoObj)=> todoObj.id === id ?{...todoObj,todo : editTodo }:todoObj)
        setTodos(editTodosObj )

        setEdit(false)
  }



  return (
    <form className='todos_single' onSubmit={(e)=>handleEdit(e,todo.id)}>
{
  edit ? (
      <input
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
          className="todos_single_text"
          ref={inputRef}
        />
  ) : todo.isDone ?(
      <s   className='todos_single_text todos_heading'>{todo.todo}</s>
     ) : (
<span className='todos_single_text todos_heading'>{todo.todo}</span>
     )}
      
      <div>
        <span className='icon'
          onClick={() => {
            if (!edit && !todo.isDone) {
              setEdit(!edit);
            }
          }}
        >
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
