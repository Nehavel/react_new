import React, { Component } from "react";
class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: "New msg",
    };
  }
  changeMessage() {
    this.setState({
      message: "Subscribed",
    });
  }
  render() {
    return (
      <div>
        {/* props in class components */}
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>Subscribe</button>
      </div>
    );
  }
}
export default Message;
