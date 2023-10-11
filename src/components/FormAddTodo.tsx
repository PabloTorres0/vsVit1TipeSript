import React, { ChangeEvent } from 'react'
interface Props {
  addTodo:(text:string) => void
}


const FormAddTodo = ({addTodo}:Props) => {
    const [text, setText] = React.useState('')
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value) 
    }

const handleSubmit = (e: ChangeEvent<HTMLInputElement>) => {
  e.preventDefault()
  
  const trimedText = text.trim()
  if (!trimedText)return  
  addTodo(trimedText)
  setText('')
}

  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="todo">
          Todo
          <input type="text" 
          name="todo" 
          id="todo" 
          placeholder="Ingresa ToDo" 
          value={text}
          onChange={handleChange}          />
          <button type="submit"
          >Add ToDo</button>
        </label>
      </form>
  )
}

export default FormAddTodo