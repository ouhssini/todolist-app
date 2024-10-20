import { AcademicCapIcon } from "@heroicons/react/24/solid";
import React, { Component } from "react";
import { toast } from "react-toastify";

const TodoItem = ({ todo, Alltodos, setAllTodos }) => {
  const handleStatue = () => {
    setAllTodos(
      Alltodos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, isDone: !item.isDone };
        }
        return item;
      })
    );
    toast.success("Todo Status Changed");
  };
  const handleDelet = (id) => {
    setAllTodos(Alltodos.filter((item) => item.id !== id));
    toast.info("Todo Deleted Successfully");
  };

  return (
    <div
      className={`${todo.isDone ? "todo-done" : ""} todo-item `}
     
    >
      <p className="todo-text"  onClick={handleStatue}>{todo.text}</p>
      <div className="buttons">
        <button className="delete-btn" onClick={() => handleDelet(todo.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
