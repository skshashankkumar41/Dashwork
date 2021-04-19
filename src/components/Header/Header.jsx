import React from "react";
import * as s from "./Header.styles";

const Header = (props) => {
  return (
    <s.HeaderContainer>
      <s.HeaderTitle>{props.headerName}</s.HeaderTitle>
    </s.HeaderContainer>
  );
};

export default Header;
