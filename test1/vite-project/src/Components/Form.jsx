import React, { useState } from "react";

function Form() {
  const [text, setText] = useState("");
  function handleChange(e) {
    console.log("some change occurred");
    console.log(e);
    setText(e.target.value);
  }
  return (
    <form>
      {/* <input onChange={handleChange} type="text" value="tt" /> */}
      {/* <input onChange={handleChange} type="text" value={text} /> */}
      <input
        onChange={(e) => setText(e.target.value)}
        type="text"
        value={text}
      />
      <h1>{text}</h1>
    </form>
  );
}

export default Form;
