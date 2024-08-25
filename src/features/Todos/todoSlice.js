import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import axios from "axios"
const initialState = {
    todos: []
}
export const fetchTodo = createAsyncThunk("todo/fetch", async()=>{
    console.log("reached");
    try {
        const res = await axios.get("http://localhost:3000/api/test/todo");
        const data = res.data.msg
        return data
    
    } catch (error) {
        console.log(error);
    }
})

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
        },
        
    },
    extraReducers: (builder)=>{
        builder.addCase(fetchTodo.pending, (state,action)=>{
            console.log("pending");
        }),
        builder.addCase(fetchTodo.fulfilled,(state,action)=>{
            console.log("e get am");
            state.todos = action.payload
        })
        builder.addCase(fetchTodo.rejected, (state,action)=>{
            console.log("e no gree");
        })
    }
})

export const { addTodo, deleteTodo } = todoSlice.actions

export default  todoSlice.reducer