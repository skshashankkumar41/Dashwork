import React from "react";
import "../styles/sidebar.css";
import { SideBarData } from "./sidebarData";
import { useHistory } from "react-router-dom";

const Sidebar = () => {
  const history = useHistory();
  const handleClick = (path) => history.push(path);

  return (
    <div className="Sidebar">
      <ul className="SidebarList">
        <li className="mainRow">Dashwork</li>
        {SideBarData.map((val, key) => {
          return (
            <li key={key} className="row" onClick={() => handleClick(val.path)}>
              <div id="icon">{val.icons}</div>
              <div id="title">{val.title}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
