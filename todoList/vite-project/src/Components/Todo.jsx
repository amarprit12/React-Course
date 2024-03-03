import React from "react";

function Todo(props) {
  return (
    <div className="todo">
      <p>{props.todo}</p>
      <div className="actions">
        <input type="checkbox" />
        <button onClick={() => props.delToDo(props.index)}>Delete</button>
      </div>
    </div>
  );
}

export default Todo;
