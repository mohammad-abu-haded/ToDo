import type { IToDo } from "../types";

interface IState {
    todos: IToDo[],
    userName: string
}

interface IAction {
    type: string;
    payload: any;
}

const reducer = (state: IState, action: IAction): IState => {

switch (action.type) {
    case 'INIT-TODOS':
        if(state.todos.length ===0) {
            return {...state, todos: action.payload}
        } 
        return state;
    case 'ADD-TODO': 
        const newTodo = action.payload;
        newTodo.id = Date.now();
        return {...state, todos: [...state.todos, newTodo]}

        case 'REMOVE-TODO':
        return {...state, todos: state.todos.filter(item => item.id !== action.payload)};

    case 'TOGGLE-TODO':
        const itemId = action.payload;
        return {...state, todos: state.todos.map(toDo => toDo.id == itemId? {...toDo, isCompleted: !toDo.isCompleted}: toDo)}

    default: return state;
}
};
export default reducer;