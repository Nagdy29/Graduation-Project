import axios from "axios";

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  handleMessage = async (user_input) => {
    try {
      const response = await axios.post(
        "http://16.170.174.66/chat-bot/predict_route",
        { user_input }
      );
      console.log(response.data.response);
      const botMessage = this.createChatBotMessage(response.data.response);
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    } catch (error) {
      console.error("Error fetching response from API:", error);
      const errorMessage = this.createChatBotMessage(
        "Sorry, I couldn't process your request. Please try again later."
      );
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, errorMessage],
      }));
    }
  };
}

export default ActionProvider;
