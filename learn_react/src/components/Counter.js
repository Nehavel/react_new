import React, { Component } from "react";

export class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  increment() {
    /*use prev state*/
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  }
  render() {
    return (
      <div>
        {/* props in class components */}
        <h1>{this.state.count}</h1>
        <button onClick={() => this.increment()}>increment</button>
      </div>
    );
  }
}

export default Counter;
