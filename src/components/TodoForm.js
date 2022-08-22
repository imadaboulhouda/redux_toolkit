import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../actions/TodoAction";
export default function TodoForm() {
  const dispatch = useDispatch();
  const [task, setTask] = useState("");
  const addTodo = () => {
    dispatch(addTask(task));
    setTask("");
  };
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        name="todo"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={() => addTodo()}>Add</button>
    </form>
  );
}
