import React from "react";
import * as s from "./MainView.styles";
import Routes from "../../Routes";
import Header from "./../Header/Header";

const MainView = () => {
  return (
    <s.MainViewContainer>
      <Header></Header>
      <Routes></Routes>
    </s.MainViewContainer>
  );
};

export default MainView;
