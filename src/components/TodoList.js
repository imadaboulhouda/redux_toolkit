import React from "react";
import { useSelector } from "react-redux";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const todos = useSelector((selector) => selector.todo);

  console.log(todos);
  return (
    <>
      <div>
        {todos.map((data, index) => (
          <TodoItem key={index} data={data} />
        ))}
      </div>
      <div>
        <TodoForm />
      </div>
    </>
  );
}
