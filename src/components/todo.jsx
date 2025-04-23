import { useSelector, useDispatch } from "react-redux";
import AddForm from "./AddForm";
import { markDone, deleteTask } from "../features/todo/todoSlice";
import { useState } from "react";

function Todo() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  console.log(todos,'=============ooo')

  const markDoneHandler = (id) => {
    dispatch(markDone(id));
    console.log(todos,'----------------------=====');
    
  };

  const deleteHandler = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <>
      <h1 style={{ textAlign: 'center', margin: '20px 0', color: 'white' }}>Todo App</h1>
      <AddForm />
      <div className="d-flex justify-content-center mt-4">
        <ul className="list-group w-50">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="list-group-item d-flex justify-content-between align-items-center bg-dark text-white border-light"
            >
              <span style={{ textDecoration: todo.isDone ? 'line-through' : 'none' }}>
                {(todo.task).toUpperCase()}
              </span>
              <div>
                <button
                  className="btn btn-sm btn-outline-success me-2 mr-2"
                  onClick={() => markDoneHandler(todo.id)}
                >
                  Done
                </button>
                <button
                  className="btn btn-sm btn-outline-danger"
                  onClick={() => deleteHandler(todo.id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Todo;
