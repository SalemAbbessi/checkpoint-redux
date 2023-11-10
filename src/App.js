import"./App.css"
import TodosListe from './components/TodosListe'
import AddTodo from "./components/AddTodo"
import { Button } from "react-bootstrap"
import { filtereDone, filtereNotdone } from "./redux/actions/ActionsTodos"
import { useDispatch } from 'react-redux';




// Main component representing the Todo application.
 const App=()=>{
  // Accessing the dispatch function from the Redux store.
  const dispatch = useDispatch()
   // Function to dispatch the action for filtering completed todos.
  const FILTEREDONE = ()=> {
    dispatch(filtereDone())
  }
    // Function to dispatch the action for filtering uncompleted todos.
  const FILTERENOTDONE = ()=> {
    dispatch(filtereNotdone())
  }
 // Render the main application structure.
  return (
    <div className='App'>
      
      <AddTodo/> 
      <TodosListe/> 
      <Button variant="danger" onClick={FILTEREDONE} > filter done </Button>
      <Button variant="danger" onClick={FILTERENOTDONE} > filter Notedone </Button>
    </div>
  )
}


export default App