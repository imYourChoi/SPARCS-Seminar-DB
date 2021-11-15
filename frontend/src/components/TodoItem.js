import React from "react";
import { FaCheckSquare, FaTrashAlt } from "react-icons/fa";
import "./TodoItem.css";

const TodoItem = (props) => {
  return (
    <div className="todo-item">
      <span style={{textDecoration: props.done ? "line-through" : "none"}}>{props.name}</span>
      <div className="todo-item-action" onClick={props.onDeleteClick}>
        <FaTrashAlt />
      </div>
      <div className="todo-item-action" onClick={props.onFinishClick}>
        <FaCheckSquare />
      </div>
    </div>
  );
};

export default TodoItem;
