import React, { Component } from "react";
import AddIntentDialog from "../DialogBox/DialogBox";
import * as s from "./Header.styles";

class Header extends Component {
  state = {
    message: "",
  };

  handleMessage = (message) => {
    this.setState({ message: message });
  };

  handleButton = () => {
    let button;
    if (this.props.headerName === "Intent") {
      button = (
        <AddIntentDialog
          onRequestComplete={this.handleMessage}
        ></AddIntentDialog>
      );
    } else {
      button = null;
    }
    return button;
  };

  componentDidUpdate(_, prevState) {
    if (this.state.message && !prevState.message) {
      this.hideTimeout = setTimeout(() => this.setState({ message: "" }), 2500);
    }
  }

  // clean up in case there is pending update
  componentWillUnmount() {
    clearTimeout(this.hideTimeout);
  }

  // componentDidUpdate() {
  //   setTimeout(() => this.setState({ message: "" }), 2500);
  // }

  renderBadge = () => {
    if (this.state.message !== "") {
      return <s.HeaderBadge>{this.state.message}</s.HeaderBadge>;
    } else {
      return null;
    }
  };

  render() {
    return (
      <s.HeaderContainer>
        <s.HeaderTitle>{this.props.headerName}</s.HeaderTitle>
        {this.renderBadge()}
        {this.handleButton()}
      </s.HeaderContainer>
    );
  }
}

export default Header;
