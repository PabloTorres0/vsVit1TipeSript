import React from 'react'
import FormAddTodo from './components/FormAddTodo';
import Todos from './components/Todos';

export interface Todo {
  text:string;
  completed:boolean;
}

const initalTodos = [{
  text: "learn react",
  completed: false,
},
{
  text: "Learn Typescript",
  completed: false,
}
]

const App = () => {
  const [todos, setTodos] = React.useState<Todo[]>(initalTodos)

const addTodo = (text:string) => {
  const newTodos = {
    text: text,
    completed: false,
  }
  setTodos([...todos, newTodos])  
}  

const toggleTodo = (selectedTodo: Todo) => {
  setTodos(prevTodos =>{
    return prevTodos.map(todo =>{
      if(todo === selectedTodo){
        return {
        ...todo,
          completed:!todo.completed
        }
      }
      return todo
    })
  })
}
const removeTodo = (selectedTodo:Todo) => {
  setTodos(prevTodos =>{
    return prevTodos.filter(todo =>{
      return todo!== selectedTodo
    })
  })
}

  

  return (
    <div className='container'>
      <h1>TODO</h1>
        <FormAddTodo addTodo={addTodo}/>
      <div>
        <Todos 
        todos={todos}
        toggleTodo={toggleTodo}
        removeTodo={removeTodo}
        />
      </div>
    </div>
  )
}

export default App