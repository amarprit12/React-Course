import React from "react";

function Message() {
  function sayHello() {
    console.log("Hello");
  }
  return <button onClick={sayHello}>Click me to say hello</button>;
}

export default Message;
