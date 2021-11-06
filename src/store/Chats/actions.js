import { chats } from "../../services/firebase";

export const Add_New_Chat = "Add_New_Chat";
export const Remove_Chat = "Remove_Chat";
export const Init_chat = "Inint_Chat";

export const addNewChat = (chatName) => ({
  type: Add_New_Chat,
  payload: chatName,
});

export const removeChat = (chatId) => ({
  type: Remove_Chat,
  payload: chatId,
});

export const addNewMessageWithBot = (message) => async (dispatch, getState) => {
  chats.child(message.chatID).child("messages").push(message);
  // dispatch(addNewMessage(message));
  // setTimeout(() => {
  //   dispatch(addNewMessage({ ...message, message: "botmessage" }));
  // }, 3000);
};

export const initChatsTracking = () => (dispatch) => {
  chats.on("value", async (snapshot) => {
    let data = await snapshot.val();

    console.log(data);
    // setChatsDataBase(data);

    // for (let key in data) {
    //   ChatIDs.push(key);

    //   ChatTitles.push(data[key].chatName);
    // }

    // srtChatIDsDataBase(ChatIDs);
    // setChatTitlesDataBase(ChatTitles);
  });
};

// const getPayloadFromSnapshot = (snapshot) => {
//   const messages = [];

//   snapshot.forEach((mes) => {
//     messages.push(mes.val());
//   });

//   return { chatId: snapshot.key, messages };
// };

// export const addMessageWithFirebase = (chatId, message) => async () => {
//   chats.ref("messages").child(chatId).child(message.id).set(message);
//   chats.child(message.chatID).child("messages").push(message);
// };

// export const initMessageTracking = () => (dispatch) => {
//   db.ref("messages").on("child_changed", (snapshot) => {
//     const payload = getPayloadFromSnapshot(snapshot);
//     dispatch({
//       type: CHANGE_MESSAGES,
//       payload,
//     });
//   });

//   db.ref("messages").on("child_added", (snapshot) => {
//     const payload = getPayloadFromSnapshot(snapshot);
//     dispatch({
//       type: CHANGE_MESSAGES,
//       payload,
//     });
//   });
// };
