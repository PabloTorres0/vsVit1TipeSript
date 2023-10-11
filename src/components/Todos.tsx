import React from 'react'
import { Todo } from '../App';


interface Props{
    todos: Todo[];
    toggleTodo:(selectedTodo:Todo) => void;
    removeTodo:(selectedTodo:Todo) => void;
}

const Todos = ({todos,toggleTodo,removeTodo}:Props) => {
  return (
    <>
    {
          todos.map((todo, index) => {
                      return (
                        <article key={index}>
                          <label htmlFor='todo'>
                            <input type="checkbox" 
                            checked={todo.completed} 
                            onChange={()=>toggleTodo(todo)}
                            id='todo' />
                            <span>{todo.text}</span>
                          </label>
                          <button 
                          className='contrast'
                          onClick={()=>removeTodo(todo)}>Remove</button>
                        </article>
                      )
                    })
        }
    </>
  )
}

export default Todos