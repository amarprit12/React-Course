import React, { useState } from "react";

function Counter1() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>This is my Counter: {count}</h1>
      <button>Increment</button>
      <button>Decrement</button>
    </>
  );
}

export default Counter1;
