import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask } from "../actions/TodoAction";

export default function TodoItem({ data }) {
  const dispatch = useDispatch();
  const deleteTasks = () => {
    dispatch(deleteTask(data.id));
  };
  return (
    <div>
      <p>{data.name}</p>
      <button onClick={() => deleteTasks()}>Supprimer</button>
    </div>
  );
}
