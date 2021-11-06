import { Change_OnlineStatus, Change_TextStatus } from "./actions";

const initialState = {
  onlineStatus: true,
  tesxtstatus: "Дома",
};

/**
 * @param {object} action
 * @param {string} action.type
 * @param {string} action.payload
 * */

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case Change_OnlineStatus: {
      return {
        ...state,
        onlineStatus: !state.onlineStatus,
      };
    }
    case Change_TextStatus: {
      return {
        ...state,
        tesxtstatus: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
