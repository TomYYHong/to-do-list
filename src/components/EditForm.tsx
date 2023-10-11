import React, { useState } from "react";

interface Task {
  id: string;
  task: string;
  completed: boolean;
  isEditing: boolean;
}

interface EditTodoFormProps {
  editTodo: (task: string, id: string) => void;
  task: Task;
}

export const EditTodoForm: React.FC<EditTodoFormProps> = ({
  editTodo,
  task,
}) => {
  const [value, setValue] = useState<string>(task.task);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    editTodo(value, task.id);
  };

  return (
    <form onSubmit={handleSubmit} className="TodoForm">
      <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        className="todo-input"
        placeholder="Update task"
      />
      <button type="submit" className="todo-btn">
        Edit Task
      </button>
    </form>
  );
};
