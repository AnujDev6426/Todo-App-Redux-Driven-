import { useState } from "react";
import { useDispatch } from 'react-redux';
import { addTask } from '../features/todo/todoSlice';

function AddForm() {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    if (task.trim()) {
      dispatch(addTask(task));
      setTask("");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <form onSubmit={submitHandler} className="w-50">
        <div className="input-group">
          <input
            type="text"
            placeholder="Enter a new task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="form-control shadow-sm"
          />
          <button className="btn btn-success shadow-sm" type="submit">
            Add Task
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddForm;
