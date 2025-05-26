import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './main.css'
import { TodoList } from './TodoList'
import AddForm from './AddForm'

function App() {
  const [todos, setTodos] = useState([
    {value: 'Test1', isChecked: false, id: 1},
    {value: 'Test2', isChecked: false, id: 2},
    {value: 'Test3', isChecked: false, id: 3},
    {value: 'Test4', isChecked: false, id: 4}
  ])

  return (
    <>
      <AddForm tasks={todos} setTasks={setTodos}/>
      <TodoList tasks={todos} setTasks={setTodos}/>
    </>
  )
}

export default App
