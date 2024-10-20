import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";
import React, { useEffect } from "react";

const Input = ({ Alltodos, setAllTodos }) => {
  const handleAdd = () => {
    const input = document.querySelector("input");
    if (input.value) {
      const newTodo = {
        id: new Date().getTime().toString(),
        text: input.value,
        isDone: false,
      };
      setAllTodos([...Alltodos, newTodo]);
      input.value = "";
    }
  };
  useEffect(() => {
    const handleEnterKey = (e) => {
      if (e.key === "Enter") {
        handleAdd();
      }
    };

    // Add event listener for Enter key
    window.addEventListener("keydown", handleEnterKey);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("keydown", handleEnterKey);
    };
  }, [Alltodos]);

  return (
    <div className="todo-input">
      <input type="text" placeholder="Add a new task" />
      <ArrowRightCircleIcon className="arrow" onClick={handleAdd} />
    </div>
  );
};

export default Input;
