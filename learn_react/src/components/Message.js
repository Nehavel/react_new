import React, { Component } from "react";
class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: "New msg",
    };
    {
      /*if commented button is used, binding required here
  this.changeMessage = this.changeMessage.bind(this)*/
    }
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
        {/*alternative way of writing*/}
        <button onClick={this.changeMessage.bind(this)}>Subscribe</button>
        {/*binding in constructor is needed
        <button onClick={this.changeMessage}>Subscribe</button>
        */}
      </div>
    );
  }
}
export default Message;
