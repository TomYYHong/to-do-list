import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaintBrush, faEraser } from "@fortawesome/free-solid-svg-icons";

interface TodoProps {
  todo: {
    id: string;
    task: string;
    completed: boolean;
  };
  deleteTodo: (id: string) => void;
  editTodo: (task: string, id: string) => void;
  toggleComplete: (id: string) => void;
}

export const Todo: React.FC<TodoProps> = ({
  todo,
  deleteTodo,
  editTodo,
  toggleComplete,
}) => {
  return (
    <div className="Todo">
      <p
        className={`${todo.completed ? "completed" : "incompleted"}`}
        onClick={() => toggleComplete(todo.id)}
      >
        {todo.task}
      </p>
      <div>
        <FontAwesomeIcon
          className="edit-icon"
          icon={faPaintBrush}
          onClick={() => editTodo(todo.task, todo.id)}
        />
        <FontAwesomeIcon
          className="delete-icon"
          icon={faEraser}
          onClick={() => deleteTodo(todo.id)}
        />
      </div>
    </div>
  );
};
