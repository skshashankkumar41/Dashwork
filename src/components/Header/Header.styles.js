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
  /* outline: none; */
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
  font-family: "Poppins", sans-serif;
  font-weight: bold;

  &:hover {
    background-color: #022ef7;
    box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
  }
  &:active {
    background-color: #6b82ed;
    transform: scale(0.96);
    box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
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
