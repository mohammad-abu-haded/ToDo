import "./App.css";
import Form from "./components/form-component/form.component";
import ToDoData from "./components/ToDo-Data/ToDo_Data.component";
import AllToDos from "./components/AllTodos/AllTodos.component";
import type { IToDo } from "./types";
import { useEffect, useReducer } from "react";
import useLocalStorage from "./hooks/local_storage.hook";
import reducer from "./state/reducer";

function App() {
  const [state, dispatch] = useReducer(reducer, {todos: [], userName: "Mohammad"});
  const {storedData} = useLocalStorage(state.todos,'todo-list');

  useEffect(() => {
    dispatch({type: 'INIT-TODOS', payload: storedData || []});
  },[storedData]);

  const onSubmit = (toDo: IToDo) => {
    dispatch({type: 'ADD-TODO', payload: toDo});
    
  };
  
  const handleUpdateAfterRemove = (index: number) => {
    dispatch({type: 'REMOVE-TODO', payload: index});
  };
  
  const toggleCompleted = (e: React.ChangeEvent<HTMLInputElement>) => {
    const itemId = Number(e.target.dataset["itemId"]);    
    dispatch({type: 'TOGGLE-TODO', payload: itemId});
  }
  
  return (
      <div className="main">
        <div className="board">
        <div className="date-info">
          <div>
          <b>{new Date().toLocaleString("en-US", { weekday: "long" })}</b>,{" "}
          {new Date().getDate()}{" "}
          {new Date().toLocaleString("en-US", { month: "short" })}
          </div>
           <span>Hello - {state.userName}</span>
        </div>
        <Form onSubmit={onSubmit} />
        <ToDoData toDos={state.todos}/>
        <AllToDos toggleCompleted={toggleCompleted} toDos={state.todos} handleUpdateAfterRemove={handleUpdateAfterRemove} />
        </div>
      </div>
  
  );
}

export default App;
