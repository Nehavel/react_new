import ChildComponent from "./ChildComponent";
import React, { Component } from "react";

export default class ParentComponent extends Component {
  constructor() {
    super();
    this.getHandler = this.getHandler.bind(this);
  }
  getHandler(child) {
    alert(`clicked from child ${child}`);
  }
  render() {
    return (
      <div>
        {/* get handler is the event to trigger a fn in parent, to give data to child use props */}
        <ChildComponent getHandler={this.getHandler} />
      </div>
    );
  }
}
