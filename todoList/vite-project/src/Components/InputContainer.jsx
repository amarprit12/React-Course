import React from "react";

function InputContainer(props) {
  return (
    <>
      <div className="input-container">
        <input
          type="text"
          value={props.inputValue}
          onChange={props.writeToDo}
        />
        <button onClick={props.addToDo}>+</button>
      </div>
    </>
  );
}

export default InputContainer;
