export const SHOW_MESSAGE = "@messagesActions/SHOW_MESSAGE";
export const DISMISS_MESSAGE = "@messagesActions/DISMISS_MESSAGE";

export const showMessage = message => ({
  type: SHOW_MESSAGE,
  payload: {
    message
  }
});

export const dismissMessage = () => ({
  type: DISMISS_MESSAGE,
  payload: {
    message: null
  }
});
