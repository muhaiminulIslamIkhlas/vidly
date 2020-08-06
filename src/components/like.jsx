import React, { Component } from "react";

//Input: liked:boolean

class Like extends Component {
  state = {};
  render() {
    let classes = "fa fa-heart";
    if (!this.props.liked) classes += "-o";
    return (
      <i
        className={classes}
        style={{ cursor: "pointer" }}
        onClick={this.props.onClick}
        aria-hidden="true"
      ></i>
    );
  }
}

export default Like;
