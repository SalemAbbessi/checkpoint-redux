import React from 'react'
import { useState } from 'react'
import { Button, Form, FormControl } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/actions/ActionsTodos'

const AddTodo = () => {
    const [task,setTask]=useState("")
    const dispatch=useDispatch()
    const handleSubmit=(e)=>{
    e.preventDefault();
    if(task){
    dispatch(addTodo(task));
    setTask("");
    
    }}
  return (
    <Form style={{display:'flex',widh:'50%',margin:'50px auto'}} onSubmit={handleSubmit}>
<FormControl type='text' value={task} 
placeholder='entrer your task'
onChange={e=>setTask(e.target.value)}/>
<Button type="submit" > </Button>
    </Form>
      
    
  )
}

export default AddTodo
