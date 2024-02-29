// function Hello(props) {
//   let text = "hey";

//   //   function displayName() {
//   //     return "Amarprit";
//   //   }
//   return (
//     <>
//       {/* <h1>Hello from Hello component {10 + 20} </h1> */}
//       {/* <h1>Hello from Hello component {text} </h1> */}
//       {/* <h1>Hello from Hello component {displayName()} </h1> */}
//       <h1>
//         Hello {props.name} {props.phoneNumber}{" "}
//       </h1>
//     </>
//   );
// }

// object destructuring
// function Hello({ name, phoneNumber, arr, obj }) {
//   console.log("arr: ", arr);
//   console.log("obj: ", obj);
//   return (
//     <>
//       <h1>
//         Hello {name} {phoneNumber} {arr}
//         {obj.country}
//       </h1>
//     </>
//   );
// }

// function Hello({ name, seat, phone }) {
//   return (
//     <>
//       <h1>
//         {" "}
//         Hello {name} {seat} {phone}
//       </h1>
//     </>
//   );
// }

function Hello(props) {
  // props.name = "test2";
  // props are immutable, they wont be dynamic
  // but state is not immutable
  return (
    <>
      <h1>
        {" "}
        Hello {props.name} {props.seat} {props.phone}
      </h1>
    </>
  );
}
export default Hello;
