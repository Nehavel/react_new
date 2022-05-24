import React, { Component } from "react";
class Welcome extends Component {
  render() {
    return (
      <div>
        {/* props in class components */}
        <h1>{this.props.name}</h1>

        <h1>Hellllooo from welcome</h1>
      </div>
    );
  }
}
export default Welcome;
