import * as s from "./App.styles";
import Sidebar from "./components/SideBar/Sidebar";
import MainView from "./components/MainView/MainView";
import DynamicFeedIcon from "@material-ui/icons/DynamicFeed";
import TuneIcon from "@material-ui/icons/Tune";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import AssessmentIcon from "@material-ui/icons/Assessment";

function App() {
  const sidebarHeader = {
    fullName: "DashWork",
    shortName: "DW",
  };

  const menuItems = [
    {
      name: "Model Traniner",
      to: "/trainer",
      icon: <DynamicFeedIcon></DynamicFeedIcon>,
      subMenuItem: [
        { name: "Intent", to: "/intent" },
        { name: "NER", to: "/ner" },
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
  return (
    <div className="App">
      <s.App>
        <Sidebar sidebarHeader={sidebarHeader} menuItems={menuItems}></Sidebar>
        <MainView></MainView>
      </s.App>
    </div>
  );
}

export default App;
