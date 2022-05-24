import React from "react";
// names export if there is no default export
const Greet = (props) => {
  return <h1>Helloo {props?.name}</h1>;
};
// Named export
//export const Greet = () => <h1>Nehaaaaaaaa</h1>
//default export
export default Greet;
