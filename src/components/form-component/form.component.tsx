import './form.css'
import type { IToDo } from '../../types';

interface IProps {
  onSubmit: (toDo: IToDo) => void;
}

const Form = (props: IProps) => {

  const handleAddButton = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newStudent = {
      todo: e.currentTarget['task'].value,
      isCompleted: false, 
      id: Number(Date.now()),
      isCreatedTasks: false
    }
    props.onSubmit(newStudent);
    e.currentTarget.reset();
  }

  return (
    <form className="main-form" onSubmit={handleAddButton}>
        <input 
        name='task'
        style={{fontSize: '24px'}}
        type="text" 
        placeholder="Type Todo here..." />
        <input type="submit" className="add-button" value={"Add Todo"}/>
    </form>

  );
};

export default Form;
