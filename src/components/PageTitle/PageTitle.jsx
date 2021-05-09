import React, { Component } from "react";
// import AddIntentDialog from "../DialogBox/DialogBox";
import * as s from "./PageTitle.styles";

class PageTitle extends Component {
  state = {
    message: "",
  };

  handleMessage = (message) => {
    this.setState({ message: message });
    this.props.onDataChange();
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

  renderBadge = () => {
    if (this.state.message !== "") {
      return <s.HeaderBadge>{this.state.message}</s.HeaderBadge>;
    } else {
      return null;
    }
  };

  render() {
    return (
      <s.PageTitleContainer>
        <s.PageTitle>Intents</s.PageTitle>
        {this.renderBadge()}
        {/* <AddIntentDialog
          onRequestComplete={this.handleMessage}
        ></AddIntentDialog> */}
      </s.PageTitleContainer>
    );
  }
}

export default PageTitle;
