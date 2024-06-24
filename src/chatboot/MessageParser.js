class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(user_input) {
    // Pass the user message to the action provider for handling
    this.actionProvider.handleMessage(user_input);
  }
}

export default MessageParser;
