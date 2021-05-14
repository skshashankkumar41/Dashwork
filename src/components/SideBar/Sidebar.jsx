import React, { useState, useEffect } from "react";
import * as s from "./Sidebar.styles";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Sidebar = (props) => {
  const history = useHistory();
  const { sidebarHeader, menuItems } = props;
  const [selected, setSelectedMenuItem] = useState(menuItems[0].name);
  const [isSidebarOpen, setSidebarState] = useState(true);
  const [header, setHeader] = useState(sidebarHeader.fullName);
  const [subMenusStates, setSubMenus] = useState({});

  // Update of Header State
  useEffect(() => {
    isSidebarOpen
      ? setTimeout(() => setHeader(sidebarHeader.fullName), 200)
      : setHeader(sidebarHeader.shortName);
  }, [isSidebarOpen, sidebarHeader]);

  // Update of Sidebar State
  useEffect(() => {
    const updateWindowWidth = () => {
      if (window.innerWidth < 1150) setSidebarState(false);
      else setSidebarState(true);
    };
    window.addEventListener("resize", updateWindowWidth);

    return () => window.removeEventListener("resize", updateWindowWidth);
  }, [isSidebarOpen]);

  useEffect(() => {
    const newSubMenus = {};

    menuItems.forEach((item, index) => {
      const hasSubmenus = item.subMenuItem.length !== 0;

      if (hasSubmenus) {
        newSubMenus[index] = {};
        newSubMenus[index]["isOpen"] = false;
        newSubMenus[index]["selected"] = null;
      }
    });

    setSubMenus(newSubMenus);
  }, [menuItems]);

  const handleMenuItemClick = (name, index, hasSubMenu) => {
    props.onSideBarSelect(name);
    setSelectedMenuItem(name);
    if (!hasSubMenu) setSidebarState(false);
    const subMenusCopy = JSON.parse(JSON.stringify(subMenusStates));

    if (subMenusStates.hasOwnProperty(index)) {
      subMenusCopy[index]["isOpen"] = !subMenusStates[index]["isOpen"];
      setSubMenus(subMenusCopy);
    } else {
      for (let item in subMenusCopy) {
        subMenusCopy[item]["isOpen"] = false;
        subMenusCopy[item]["selected"] = null;
      }
      setSubMenus(subMenusCopy);
    }
  };

  const handleSubMenuClick = (name, index, subMenuIndex, subHeaderName) => {
    props.onSideBarSelect(subHeaderName);
    if (isSidebarOpen) setSidebarState(false);
    const subMenusCopy = JSON.parse(JSON.stringify(subMenusStates));
    subMenusCopy[index]["selected"] = subMenuIndex;
    setSubMenus(subMenusCopy);
  };

  const handleHeaderClick = () => {
    props.onSideBarSelect("Dashwork");
    history.push("/");
    if (!isSidebarOpen) setSidebarState(true);
  };

  const menuItemsJSX = menuItems.map((item, index) => {
    const isItemSelected = selected === item.name;
    const hasSubMenu = item.subMenuItem.length !== 0;
    const isOpen = subMenusStates[index] ? subMenusStates[index].isOpen : null;
    const subMenuJSX = item.subMenuItem.map((subMenu, subMenuIndex) => {
      const isSubMenuSelected =
        subMenusStates[index]?.selected === subMenuIndex;
      return (
        <Link
          to={`${item.to}${subMenu.to}`}
          key={subMenuIndex}
          style={{ textDecoration: "none" }}
        >
          <s.SubMenuItem
            onClick={() =>
              handleSubMenuClick(
                subMenu.name,
                index,
                subMenuIndex,
                subMenu.headerName
              )
            }
            selected={isSubMenuSelected}
          >
            {subMenu.name}
          </s.SubMenuItem>
        </Link>
      );
    });

    return (
      <s.ItemContainer key={index}>
        <Link to={item.to} style={{ textDecoration: "none" }}>
          <s.MenuItem
            selected={isItemSelected}
            isSidebarOpen={isSidebarOpen}
            onClick={() => handleMenuItemClick(item.name, index, hasSubMenu)}
          >
            <s.MenuIcon isSidebarOpen={isSidebarOpen}>{item.icon}</s.MenuIcon>
            <s.MenuText isSidebarOpen={isSidebarOpen}>{item.name}</s.MenuText>
            {hasSubMenu && !isOpen && (
              <s.DropdownIcon>
                <ArrowDropDownIcon></ArrowDropDownIcon>
              </s.DropdownIcon>
            )}
            {hasSubMenu && isOpen && (
              <s.DropdownIcon>
                <ArrowDropUpIcon></ArrowDropUpIcon>
              </s.DropdownIcon>
            )}
          </s.MenuItem>
        </Link>
        <AnimatePresence>
          {hasSubMenu && isOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              exit={{ opacity: 0, x: -30 }}
            >
              <s.SubMenuItemContainer isSidebarOpen={isSidebarOpen}>
                {subMenuJSX}
              </s.SubMenuItemContainer>
            </motion.nav>
          )}
        </AnimatePresence>
      </s.ItemContainer>
    );
  });

  return (
    <s.SidebarContainer isSidebarOpen={isSidebarOpen}>
      <s.SidebarHeader onClick={handleHeaderClick}>{header}</s.SidebarHeader>
      <s.MenuItemContainer>{menuItemsJSX}</s.MenuItemContainer>
      <s.TogglerContainer onClick={() => setSidebarState(!isSidebarOpen)}>
        <s.Toggler></s.Toggler>
      </s.TogglerContainer>
    </s.SidebarContainer>
  );
};

export default Sidebar;
