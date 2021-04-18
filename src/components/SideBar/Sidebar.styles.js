import styled from "@emotion/styled";

export const SidebarContainer = styled.div`
  width: ${(p) => (p.isSidebarOpen ? "20%" : "5%")};
  max-width: 280px;
  min-width: 80px;
  background-image: linear-gradient(315deg, #5e5c5c 0%, #9dc5c3 74%);
  color: #fff;
  position: relative;
  transition: 0.2s ease-in all;
`;

export const SidebarHeader = styled.h3`
  padding: 20px 0;
  text-align: center;
  margin-bottom: 10px;
  letter-spacing: 3px;
  color: #fff451;
  font-weight: bold;
  font-size: 22px;
`;

export const MenuItemContainer = styled.div``;

export const ItemContainer = styled.div``;

export const MenuItem = styled.div`
  ${(p) =>
    !p.isSidebarOpen &&
    `
    text-align:center;
    ${p.selected && "background-color:rgba(0,0,0,0.6);"} 
  `};
  padding: 6px 25px;
  font-weight: 600;
  white-space: nowrap;
  color: ${(p) => (p.selected ? "rgba(255,255,255)" : "rgba(19, 15, 64)")};
  display: flex;
  transition: 0.2s ease-in all;

  &:hover {
    color: rgba(255, 255, 255);
    transition: 0.1s ease-in all;
    cursor: pointer;
  }
`;

export const SubMenuItemContainer = styled.div`
  font-size: 14px;

  ${(p) => p.isSidebarOpen && "padding-left: 30%; margin-top: -10px;"}
  ${(p) => !p.isSidebarOpen && "text-align:center"};
`;

export const SubMenuItem = styled.div`
  /* font-size: 18px; */
  color: ${(p) => (p.selected ? "rgba(255, 255, 255)" : "rgba(25, 15, 80)")};
  ${(p) => p.selected && "font-weight:bold; letter-spacing:2px;"};
  transition: 0.2s;
  &:hover {
    color: rgba(255, 255, 255);
  }
`;

export const MenuText = styled.div`
  display: ${(p) => (p.isSidebarOpen ? "inline" : "none")};
`;

export const MenuIcon = styled.div`
  ${(p) =>
    p.isSidebarOpen &&
    `padding-right:20px;
  transition:.2s ease-in padding-right;
  `};
`;

export const DropdownIcon = styled.div`
  padding-left: 3px;
  transition: 0.4s;
`;

export const TogglerContainer = styled.div`
  position: absolute;
  width: 30%;
  bottom: 10%;
  left: 0;
  right: 0;
  margin: 0 auto;
`;

export const Toggler = styled.div`
  height: 40px;
  cursor: pointer;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    left: 0;
    top: 0.45em;
    height: 0.1em;
    width: 100%;
    background-color: #fff;
    box-shadow: 0 0.75em 0 0 #fff, 0 1.5em 0 0 #fff;
  }
`;
