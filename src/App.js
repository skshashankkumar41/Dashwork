import * as s from "./App.styles";
import React, { Component } from "react";
import Sidebar from "./components/SideBar/Sidebar";
import MainView from "./components/MainView/MainView";
import DynamicFeedIcon from "@material-ui/icons/DynamicFeed";
import TuneIcon from "@material-ui/icons/Tune";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import AssessmentIcon from "@material-ui/icons/Assessment";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

const sidebarHeader = {
  fullName: "DashWork",
  shortName: "DW",
};

const menuItems = [
  {
    name: "Model Traniner",
    to: "",
    icon: <DynamicFeedIcon></DynamicFeedIcon>,
    subMenuItem: [
      { name: "Intent", to: "/intent", headerName: "Intent Trainer" },
      { name: "NER", to: "/ner", headerName: "NER Trainer" },
    ],
  },
  {
    name: "Model Tuner",
    to: "/tuner",
    icon: <TuneIcon></TuneIcon>,
    subMenuItem: [],
  },
  {
    name: "Model Player",
    to: "/player",
    icon: <PlayArrowIcon></PlayArrowIcon>,
    subMenuItem: [],
  },
  {
    name: "Model Report",
    to: "/report",
    icon: <AssessmentIcon></AssessmentIcon>,
    subMenuItem: [],
  },
];

class App extends Component {
  state = {
    headerName: "DashWork",
  };

  handleHeaderChange = (headerName) => {
    this.setState({ headerName: headerName });
  };

  render() {
    return (
      <div className="App">
        <s.App>
          <ToastContainer
            style={{ marginTop: "20px" }}
            position="top-center"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <Sidebar
            sidebarHeader={sidebarHeader}
            menuItems={menuItems}
            onSideBarSelect={this.handleHeaderChange}
          ></Sidebar>
          <MainView
            headerName={this.state.headerName}
            changeHeader={this.handleHeaderChange}
          ></MainView>
        </s.App>
      </div>
    );
  }
}

export default App;
