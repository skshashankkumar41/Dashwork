import React from "react";
import * as s from "./Player.styles";
import { Chatbot } from "react-chatbot-kit";
import ActionProvider from "../../Chatbot/ActionProvider";
import MessageParser from "../../Chatbot/MessageParser";
import config from "./../../Chatbot/chatbotConfig";
const Player = () => {
  return (
    <s.ChatbotContainer>
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      ></Chatbot>
    </s.ChatbotContainer>
  );
};

export default Player;
