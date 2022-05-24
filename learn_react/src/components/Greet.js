import React from "react";
// names export if there is no default export
const Greet = (props) => {
  return (
    <div>
      <h1>Helloo {props?.name}</h1>
      {/* anything that are passed between the tags in parent (between the greet) are displayed here
      If there is nothing like that nothing is displayed */}
      {props.children}
    </div>
  );
};
// Named export
//export const Greet = () => <h1>Nehaaaaaaaa</h1>
//default export
export default Greet;
