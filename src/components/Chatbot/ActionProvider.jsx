import axios from "axios";
class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }

  async getIntent(uttr) {
    const obj = {
      utterance: uttr,
    };
    let response = await axios.post("http://127.0.0.1:5000/predict/", obj);
    let data = await response.data;
    // console.log("GET ITENTS::", data["intents"]);
    const intent = data["intent"]["name"];
    const message = this.createChatBotMessage(intent);
    this.addChatbotMessagetoState(message);
  }

  addChatbotMessagetoState = (message) => {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };
}

export default ActionProvider;
