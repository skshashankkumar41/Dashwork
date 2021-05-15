import styled from "@emotion/styled";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 8%;
  background-color: #a3bcb6;
  padding: 0;
  margin: 0;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24);
  display: flex;
`;

export const HeaderTitle = styled.div`
  text-align: left;
  color: white;
  font-size: 20px;
  font-weight: bold;
  padding-left: 15px;
  padding-top: 8px;
`;

export const HeaderButton = styled.button`
  background-color: #3552db;
  border-radius: 8px;
  border: none;
  outline: none;
  position: absolute;
  text-align: center;
  right: 8px;
  top: 6px;
  height: 30px;
  width: 120px;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  color: white;
  font-size: 13px;
  z-index: 0;
  font-family: "Poppins", sans-serif;
  font-weight: bold;

  &:before {
    content: "";
    background: linear-gradient(
      45deg,
      #ff0000,
      #ff7300,
      #fffb00,
      #48ff00,
      #00ffd5,
      #002bff,
      #7a00ff,
      #ff00c8,
      #ff0000
    );
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing 20s linear infinite;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    border-radius: 10px;
  }
  &:hover {
    background-color: #022ef7;
    box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
  }
  &:hover:before {
    opacity: 1;
  }
  &:after {
    z-index: -1;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: #111;
    left: 0;
    top: 0;
    background-color: #384a5a;
    border-radius: 10px;
  }
  &:active {
    background-color: #6b82ed;
    transform: scale(0.96);
    box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
  }

  &:active:after {
    background: #384a5a;
  }

  @keyframes glowing {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 400% 0;
    }
    100% {
      background-position: 0 0;
    }
  }
`;

export const HeaderBadge = styled.div`
  height: 25px;
  /* width: 100px; */
  display: inline-block;
  padding-left: 6px;
  padding-right: 6px;
  position: absolute;
  right: 550px;
  text-align: center;
  background-color: rgba(250, 0, 0, 0.6);
  /* background-color: #dbd9ff; */
  font-family: "Poppins", sans-serif;
  /* color: #0d00ff; */
  color: white;
  font-weight: bold;
  border-radius: 6px;
  border: none;
  box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
  transition: 0.2s;
  /* border: 2px solid rgba(250, 0, 0, 0.4); */
`;
//#dce1e3;
