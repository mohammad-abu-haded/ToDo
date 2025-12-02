import type { IToDo } from '../../types';
import ToDoItem from '../ToDoItem/ToDoItem0component';
import './AllTodos.css'

interface IProps {
    toDos: IToDo[];
    handleUpdateAfterRemove : (index: number) => void;
    toggleCompleted: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const AllToDos = (props: IProps) => {
    const handleRemoveToDo = (ID: number) => {    
    props.handleUpdateAfterRemove (ID);
    }
    return (
        <div className='to-dos'>
        {props.toDos.map(toDo => (
            <ToDoItem
            toggleCompleted={props.toggleCompleted}
            key={toDo.id}
            todo={toDo}
            handleRemoveToDo={handleRemoveToDo}
            />
        ))}
        </div>
    )
}

export default AllToDos;