import React from 'react'
import { Button } from 'react-bootstrap'
import EditTodo from './EditTodo'
import { DeleteTodo, doneTodo, filtereDone,  } from '../redux/actions/ActionsTodos'
import { useDispatch, } from 'react-redux'


const TodoIteme = ({todo}) => {
 
  const dispatch=useDispatch();
  const handleEdite=()=>{
    if(window.confirm('are you sure!')){
      dispatch(DeleteTodo(todo.id))}
    }

    const handleDone = ()=> {
    dispatch(doneTodo(todo , todo.id))

    }

  return(
    <div style={
     {display:"flex"
    ,justifyContent:"space-around"
    ,width:"50%",
    margin:"50px auto"}}>

      <p style={{textDecoration:todo.done ? "line-through":"none"}}>{todo.task} </p>
    
      <Button variant='danger' onClick={handleEdite}>Delete</Button>
      <EditTodo todo={todo}/>
      <Button variant='success' onClick={()=>handleDone()}
      >
        {todo.done ?"not done":"done"}
        </Button>

    </div>
  )}
  
    

export default TodoIteme
