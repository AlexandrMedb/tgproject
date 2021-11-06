import faker from "faker";

import { chats } from "../../services/firebase";

import {
  Add_New_Message,
  Remove_Chat,
  Add_New_Chat,
  Init_chat,
  Remove_Message,
} from "./actions";

/**
 * @param {Object}  initialState
 * @param {Array}  initialState.[key] -array of messages, key -chat name
 */
const initialState = {};

export const chatListReducer = (state = initialState, action) => {
  switch (action.type) {
    case Add_New_Chat: {
      let chatName = faker.address.city();
      chats.push({ chatName: chatName, message: {} });
      return {
        ...state,
        [chatName]: [],
      };
    }
    case Remove_Chat: {
      const result = { ...state };
      delete result[action.payload];
      chats.child(action.payload).remove();
      return result;
    }
    case Init_chat: {
      const result = { ...state, chatList: action.payload };
      // console.log(result);
      return result;
    }

    case Add_New_Message: {
      const message = {
        id: faker.datatype.uuid(),
        user: faker.name.findName(),
        avatar: faker.image.avatar(),
        lorem:
          action.payload.message === undefined ? "" : action.payload.message,
      };

      const result = { ...state };
      result[action.payload.chatID] = [
        message,
        ...result[action.payload.chatID],
      ];

      return result;
    }

    case Remove_Message: {
      return state;
    }
    default: {
      return state;
    }
  }
};
