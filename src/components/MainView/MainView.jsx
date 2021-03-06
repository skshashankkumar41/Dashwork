import React, { Component } from "react";
import * as s from "./MainView.styles";
import Routes from "../../Routes";
import Header from "./../Header/Header";

class MainView extends Component {
  state = {
    message: "",
  };

  render() {
    return (
      <s.MainViewContainer>
        <Header headerName={this.props.headerName}></Header>
        <s.RouterContainer>
          <Routes changeHeader={this.props.changeHeader}></Routes>
        </s.RouterContainer>
      </s.MainViewContainer>
    );
  }
}

export default MainView;
