import styled from "@emotion/styled";

export const HeaderButton = styled.button`
  background-color: #3552db;
  border-radius: 8px;
  border: none;
  /* outline: none; */
  position: absolute;
  text-align: center;
  right: 150px;
  top: 10px;
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

  &:disabled {
    background-color: #bdc6f2;
  }
  &:disabled:hover {
    cursor: not-allowed;
    box-shadow: none;
  }
`;
