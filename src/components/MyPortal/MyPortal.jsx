import React from "react";
import ReactDom from "react-dom";

class MyPortal extends React.Component {
  constructor(props) {
    super(props);
    this.elems = props.children;
    this.el = document.createElement("div");
  }

  componentDidMount() {
    document.body.appendChild(this.el);
  }

  componentWillUnmount() {
    document.body.removeChild(this.el);
  }

  render() {
    return ReactDom.createPortal(this.elems, this.el);
  }
}

export default MyPortal;
