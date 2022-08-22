import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const todos = useSelector((selector) => selector.todo);
  useEffect(() => {}, [todos]);
  console.log(todos);
  return (
    <>
      <div>
        {todos.map((data) => (
          <TodoItem key={data.id} data={data} />
        ))}
      </div>
      <div>
        <TodoForm />
      </div>
    </>
  );
}
