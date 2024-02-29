import React from "react";
import Fruit from "./Fruit";

function Fruits() {
  // rendering array of objects
  //   let fruits = [
  //     { name: "Apple", price: "100Rs" },
  //     { name: "Orange", price: "100Rs" },
  //     { name: "Mango", price: "150Rs" },
  //     { name: "Pineapple", price: "200Rs" },
  //   ];

  let fruits = [
    { name: "Apple", price: 100 },
    { name: "Orange", price: 100 },
    { name: "Mango", price: 150 },
    { name: "Pineapple", price: 200 },
  ];
  return (
    // <div>
    //   {fruits.map((fruit) => (
    //     <li key={fruit.name}>
    //       {fruit.name} - {fruit.price}
    //     </li>
    //   ))}
    // </div>

    <div>
      {fruits.map((fruit) => (
        <Fruit name={fruit.name} price={fruit.price} />
      ))}
    </div>
  );
}

export default Fruits;
