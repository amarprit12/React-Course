import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };
  function incrementCount() {
    setCount(count + 1);
  }

  // component Mounting: first render of the component
  useEffect(() => {
    console.log("useEffect runs");
    document.title = `button clicked for ${count} times`;
  });

  return (
    <>
      <h1> This is my count value: {count}</h1>
      <input onChange={handleChange} type="text" value={text}></input>
      <h2>{text}</h2>
      <button onClick={incrementCount}>Increment</button>
    </>
  );
}

export default App;
