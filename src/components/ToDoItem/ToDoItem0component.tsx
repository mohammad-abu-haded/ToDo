import type { IToDo } from "../../types";
import "./ToDoItem.css";
import trashIcon from "../../../imgs/trash.svg";

interface IProps {
  todo: IToDo;
  handleRemoveToDo: (ID: number | any) => void;
  toggleCompleted: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ToDoItem = (props: IProps) => {
  return (
    <div className="to-do-item">
      <input
        style={{
          cursor: "pointer",
          width: "22.5px",
          height: "22.5px",
          borderRadius: "50%",
          appearance: "none",
          backgroundColor: props.todo.isCompleted ? "green" : "white",
          border: "1px solid #ccc",
        }}
        data-item-id={props.todo.id}
        checked={props.todo.isCompleted}
        onChange={props.toggleCompleted}
        type="checkbox"
        className="checkbox-completed"
      />
      <div className={`to-do-content ${props.todo.isCompleted ? "checked" : ""}`}>
        {props.todo.todo}
      </div>
      <img
        style={{ cursor: "pointer" }}
        onClick={() => props.handleRemoveToDo(props.todo.id)}
        src={trashIcon}
      />
    </div>
  );
};
export default ToDoItem;
