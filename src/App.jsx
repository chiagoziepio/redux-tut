import { useState } from 'react'
import Form from './components/Form'
import Todo from "./components/todo"

function App() {

  return (
    <main className='sm:w-[400px] w-[90%]'>
      <p className="mb-5 text-center text-2xl">Redux- Todo App</p>
      <Form/>
      <Todo/>
    </main>
  )
}

export default App
