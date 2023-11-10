import React from 'react'
import { useSelector } from 'react-redux'
import TodoIteme from './TodoIteme';

// Component for displaying a list of todos obtained from the Redux store.

const TodosListe = () => {
   // Accessing the todos array from the Redux store using useSelector.
    const todos=useSelector(state=>state.todosReducer.todos);
   // Rendering the component.
  return (
    <div>
      
       {todos.map((todo) =>(
       <TodoIteme key={todo.id} todo={todo}/>))
      }
    </div>
  )
}
// Exporting the TodosListe component.
export default TodosListe
