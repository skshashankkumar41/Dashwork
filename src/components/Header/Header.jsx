import React, { Component } from "react";
import * as s from "./Header.styles";

class Header extends Component {
  handleButton = () => {
    let button;
    if (this.props.headerName === "Intent Trainer") {
      button = <s.HeaderButton>Train</s.HeaderButton>;
    } else {
      button = null;
    }
    return button;
  };

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
        {/* {this.renderBadge()} */}
        {this.handleButton()}
      </s.HeaderContainer>
    );
  }
}

export default Header;
