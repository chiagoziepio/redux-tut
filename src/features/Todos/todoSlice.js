import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: []
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers:{
        addTodo: (state,action)=>{
            console.log("adding");
            const newTodo = {
                id : nanoid(),
                text: action.payload
            }
            state.todos.push(newTodo)
        },
        deleteTodo: (state,action)=>{
           
          const deleted= state.todos.filter(todo=> todo.id !== action.payload )
          state.todos = deleted
        }
    }
})

export const { addTodo, deleteTodo } = todoSlice.actions

export default  todoSlice.reducer