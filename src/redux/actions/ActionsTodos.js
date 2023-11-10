import { DELETETODO, DONETODO,EDITTODO,ADDTODO,FILTEREDONE, FILTERENOTDONE } from "../types"

export const DeleteTodo=(id)=>{
    return{
        type:DELETETODO,
        payload: id,

    };
};
// Action creator for marking a todo as done.
export const doneTodo =(task ,id)=>{
    return{
        type:DONETODO,
        payload: {id,task}

    };
};
// Action creator for editing a todo by ID with a new task.
export const editTodo =(id,newtask)=>{
    return{
        type:EDITTODO,
        payload: {id, newtask} 
    }
}
// Action creator for adding a new todo with a given task.
export const addTodo =(task)=>{
    return{
        type:ADDTODO,
        payload:task,

    };
};

export const filtereDone =()=>{
    return{
        type:FILTEREDONE,
    }
}
// Action creator for filtering and displaying uncompleted todos.
export const filtereNotdone =(i)=>{
    return{
        type:FILTERENOTDONE,
    }
}