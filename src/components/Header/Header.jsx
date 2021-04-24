import React from "react";
import * as s from "./Header.styles";

const Header = (props) => {
  let button;
  if (props.headerName === "Intent") {
    button = (
      <s.HeaderButton
        onClick={() => {
          console.log("BUTTON CLICKED");
        }}
      >
        + Add Intent
      </s.HeaderButton>
    );
  } else {
    button = null;
  }

  return (
    <s.HeaderContainer>
      <s.HeaderTitle>{props.headerName}</s.HeaderTitle>
      {button}
    </s.HeaderContainer>
  );
};

export default Header;
