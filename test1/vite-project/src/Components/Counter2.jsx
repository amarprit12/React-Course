import React, { useState } from "react";

function Counter2() {
  const [count, setCount] = useState(0);
  const [factor, setFactor] = useState(1);

  function increment() {
    setCount(count + factor);
  }

  function decrement() {
    setCount(count - factor);
  }

  function incrementFactor() {
    setFactor(factor + 1);
  }
  function decrementFactor() {
    setFactor(factor - 1);
  }

  return (
    <>
      <h1>Count is : {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>

      <h1>Factor is : {factor}</h1>
      <button onClick={incrementFactor}>Increment Factor</button>
      <button onClick={decrementFactor}>Decrement Factor</button>
    </>
  );
}

export default Counter2;
