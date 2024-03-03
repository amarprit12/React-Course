import { useState } from "react";
import "./App.css";
import InputContainer from "./Components/InputContainer";
import ToDoContainer from "./Components/ToDoContainer";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todo, setTodo] = useState([]);

  function writeToDo(e) {
    console.log("input: ", e.target.value);
    setInputValue(e.target.value);
  }

  function addToDo() {
    if (inputValue != "") {
      // add all previous tasks
      setTodo((prevToDo) => [...prevToDo, inputValue]);
      setInputValue("");
    }
  }

  function delToDo(toDoIndex) {
    console.log("toDoIndex: ", toDoIndex);
    // console.log("prevTodo:", prevToDo);
    setTodo((prevToDo) =>
      prevToDo.filter((prevToDo, prevToDoIndex) => {
        return prevToDoIndex != toDoIndex;
      })
    );
    // setTodo((prevToDo) => {
    //   prevToDo.filter((prevToDos, prevToDoIndex) => {
    //     return prevToDoIndex != toDoIndex;
    //   });
    // });
  }

  console.log("todo: ", todo);
  return (
    <main>
      <h1>To Do List</h1>
      <InputContainer
        inputValue={inputValue}
        writeToDo={writeToDo}
        addToDo={addToDo}
      />
      <ToDoContainer todo={todo} delToDo={delToDo} />
    </main>
  );
}

export default App;
