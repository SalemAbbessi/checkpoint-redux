import { DELETETODO, DONETODO, ADDTODO, EDITTODO, FILTEREDONE , FILTERENOTDONE  } from "../types"

const initialState={
todos:[
    {
        id:1,
        task : "bonjour",
        done:false    

    },
    {
        id:2,
        task:"salut",
        done:false    

    }

]
}
const todosReducer=(state=initialState,action)=>{
 switch(action.type){
    case DELETETODO:
        return{...state,todos:state.todos.filter(
            (todo)=>todo.id!==action.payload),
        };
        case DONETODO:
        return{
            ...state,
            todos:state.todos.map((todo)=>
            todo.id===action.payload.id 
            ?{...todo,done : !todo.done}
            :todo),
        };
        case EDITTODO:
            return{
                ...state,
                todos:state.todos.map((todo)=>
                todo.id===action.payload.id 
                ?{...todo,task :action.payload.newtask}
                :todo),
            };
            case ADDTODO:
            return{
                ...state,
                todos:[...state.todos
                    ,{id:Math.random(),task:action.payload,done:false}]
            };
            case FILTEREDONE:
               return{
                ...state,todos:state.todos.filter((todo)=>todo.done===true)
               }
            case FILTERENOTDONE : 
             return {
                ...state, todos:state.todos.filter((todo) =>todo.done === false )
             }

               
        default:
            return state;
    }
}


export default todosReducer






