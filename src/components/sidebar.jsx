import React from "react";
import "../styles/sidebar.css";
import { SideBarData } from "./sidebarData";

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <ul className="SidebarList">
        <li className="mainRow">Dashwork</li>
        {SideBarData.map((val, key) => {
          return (
            <li key={key} className="row">
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
