import React, { useState } from "react";

function Form1() {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  function handleSubmit(e) {
    // console.log(name);
    e.preventDefault();
    console.log(name);
  }
  return (
    <div>
      <h1>
        {name.firstName}-{name.lastName}
      </h1>
      <form>
        <label>FirstName</label>
        <input
          type="text"
          value={name.firstName}
          onChange={(e) => {
            //   setName({ firstName: e.target.value, lastName: "" });
            setName({ ...name, firstName: e.target.value }); // getting all previous values using spread operator
          }}
        />
        <label>LastName</label>
        <input
          type="text"
          value={name.lastName}
          onChange={(e) => {
            //   setName({ lastName: e.target.value, firstName: "" });
            setName({ ...name, lastName: e.target.value });
          }}
        />
        <button
          onClick={(e) => {
            handleSubmit(e);
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form1;
