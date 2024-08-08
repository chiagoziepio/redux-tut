import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteTodo } from "../features/Todos/todoSlice"

const Todo = () => {
  const dispatch = useDispatch()
  const todo = useSelector(state=> state.todos.todos)

  
  return (
    <div>
      
      {todo.length?(
        <div>
            {todo.map((todo, index)=>(
            <li key={todo.id} className="bg-gray-600 flex flex-row justify-between my-3 p-2 list-none rounded-2xl">
              <p>{todo.text}</p>
              <button className="btn rounded-[10px] bg-red-300 text-white w-[5rem] h-[2rem]" onClick={()=>dispatch(deleteTodo(todo.id))}>Delete</button>
            </li>
        ))} 
        </div>
      ):(<p className='text-center'>No todo added</p>)}
        
    </div>
  )
}

export default Todo