import React from "react";
import DynamicFeedIcon from "@material-ui/icons/DynamicFeed";
import TuneIcon from "@material-ui/icons/Tune";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import AssessmentIcon from "@material-ui/icons/Assessment";

export const SideBarData = [
  {
    title: "Model Trainer",
    icons: <DynamicFeedIcon></DynamicFeedIcon>,
    path: "/trainer",
  },
  {
    title: "Model Tuner",
    icons: <TuneIcon></TuneIcon>,
    path: "/tuner",
  },
  {
    title: "Model Player",
    icons: <PlayArrowIcon></PlayArrowIcon>,
    path: "/player",
  },
  {
    title: "Model Report",
    icons: <AssessmentIcon></AssessmentIcon>,
    path: "/report",
  },
];
