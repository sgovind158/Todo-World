import React, { useState } from 'react';

import './App.css';
import InputField from './componets/InputField';
import { Todo } from './componets/models/model';
import TodosList from './componets/TodosList';

const  App:React.FC=()=> {

  const [todo,setTodo] = useState<string>("")

  const [todos, setTodos] = useState<Todo[]>([]);


  const handleAdd = (e:React.FormEvent)=>{
    e.preventDefault()

    if(todo){
    setTodos( [...todos,{id:Date.now(),todo,isDone:false}]);

    // console.log(todos)
    setTodo("")
    }
  }
  return (
    <div className="App">
     <span className='heading'>World Task</span>

     <InputField todo = {todo} setTodo={setTodo} handleAdd={handleAdd}/>

    <TodosList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
