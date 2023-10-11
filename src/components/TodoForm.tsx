import React, { useState } from "react";

interface TodoFormProps {
  addTodo: (task: string) => void;
}

export const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
  const [value, setValue] = useState<string>("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (value) {
      addTodo(value);
      setValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="TodoForm">
      <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        className="todo-input"
        placeholder="Please enter your todo task?"
      />
      <button type="submit" className="button">
        Add Task
      </button>
    </form>
  );
};
