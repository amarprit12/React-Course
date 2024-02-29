import React from "react";

// function Animals() {
//   let animals = ["Cat", "Dog", "Horse"];
//   return <h1>{animals}</h1>;
// }

// rendering array
// map method
// take animals array, and for every animal one by one just create h1

// function Animals() {
//   let animals = ["Cat", "Dog", "Horse"];
//   console.log("animals: ", animals);
//   return (
//     <div>
//       {animals.map((animal) => (
//         <h1>{animal}</h1>
//       ))}
//     </div>
//   );
// }

function Animals() {
  let animals = ["Cat", "Dog", "Horse"];
  console.log("animals: ", animals);
  return (
    <div>
      <ol>
        {animals.map((animal) => (
          <li>{animal}</li>
        ))}
      </ol>
    </div>
  );
}
export default Animals;
