
import { useState } from 'react';
import { FormControl } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { editTodo } from '../redux/actions/ActionsTodos';
import { useDispatch } from 'react-redux';

function EditTodo(todo) {

  const dispatch=useDispatch()
  const [show, setShow] = useState(false);
const[task, setTask]=useState(todo.todo.task)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
const handleEdite=()=>{
  
dispatch(editTodo(todo.todo.id,task));
handleClose()
}
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Edite
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormControl type='texte' value={task} onChange={event=>setTask(event.target.value)}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEdite}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditTodo;