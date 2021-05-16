import React, { Component } from "react";
import * as s from "./Header.styles";
import axios from "axios";

class Header extends Component {
  handleTrain = async () => {
    const { data: response } = await axios.get(
      "http://127.0.0.1:5000/train_model/"
    );

    console.log(response["response"]);
  };
  handleButton = () => {
    let button;
    if (this.props.headerName === "Intent Trainer") {
      button = (
        <s.HeaderButton onClick={this.handleTrain}>Train</s.HeaderButton>
      );
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
