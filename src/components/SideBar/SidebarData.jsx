import React from "react";
import DynamicFeedIcon from "@material-ui/icons/DynamicFeed";
import TuneIcon from "@material-ui/icons/Tune";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import AssessmentIcon from "@material-ui/icons/Assessment";

export const sidebarHeader = {
  fullName: "DashWork",
  shortName: "DW",
};

export const menuItems = [
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
