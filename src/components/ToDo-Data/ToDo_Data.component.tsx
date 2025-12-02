import type { IToDo } from '../../types';
import './ToDo-Data.css'

interface IProps {
    toDos: IToDo[];
}
const ToDoData = (props: IProps) => {
    return(
        <div className='main-ToDo'>
            <div className='created-tasks'>
                <b>{props.toDos.length}</b>
                <div>Created tasks</div>
            </div>
            <div className='completed-tasks'>
                <b>{props.toDos.filter(toDo => toDo.isCompleted).length}</b>
                <div>Completed tasks</div>
            </div>
        </div>
    )
}

export default ToDoData;