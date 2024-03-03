import React from "react";
import Todo from "./Todo";

function ToDoContainer(props) {
  console.log("props: ", props.todo);

  return (
    <div className="container">
      {props.todo.map((todo, index) => {
        return <Todo todo={todo} index={index} delToDo={props.delToDo} />;
      })}
    </div>
  );
}

export default ToDoContainer;
