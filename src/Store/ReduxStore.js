import { configureStore } from "@reduxjs/toolkit"
import counterReducer  from "../features/Counters/counterSlice"
import todoReducer from "../features/Todos/todoSlice"


export const store = configureStore({
    reducer:{
        counters: counterReducer,
        todos: todoReducer
    }
})
