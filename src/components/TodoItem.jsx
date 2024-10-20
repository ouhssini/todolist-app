import React, { Component } from "react";

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
  };
  const handleDelet = (id) => {
    setAllTodos(Alltodos.filter((item) => item.id !== id));
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
