import React, { useState } from "react";

function Counter() {
  // state is local memory of our component which will keep track
  //of all things happening in component
  const [count, setCount] = useState(1);

  // every time state changes, react component gets re rendered
  // every time state changes, rerender happens with updated state data
  // it is rerendering not refresh
  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    setCount(count - 1);
  }
  return (
    <>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  );
}

export default Counter;
