import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { addTodo } from "../features/Todos/todoSlice"

const Form = () => {
  const [text, setText] = useState("")
  const dispatch = useDispatch()

  const handleAddTodo = (e)=>{
    e.preventDefault()
    if(!text)return
    dispatch(addTodo(text))
    setText("")
  }
  return (
    <form>
        <input 
        type="text" 
        value={text}
        className='rounded-[15px]'
        placeholder='new todo'
        onChange={e=> setText(e.target.value)}
        />
        <button className="bg-cyan-600 rounded-[20px]" onClick={handleAddTodo}>Add</button>
    </form>
  )
}

export default Form