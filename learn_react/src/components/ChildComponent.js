import React from "react";

function ChildComponent(props) {
  return (
    <div>
      {/* call the parent method using props */}
      <button onClick={() => props.getHandler("childddd")}>click</button>
    </div>
  );
}

export default ChildComponent;
