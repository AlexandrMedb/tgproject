export const Change_OnlineStatus = "Change_OnlineStatus";
export const Change_TextStatus = "Change_TextStatus";

/**
 * @param {object} card
 * @param {string} card.id
 * @param {string} card.content
 * @param {string} card.collectionId
 * */
export const changeOnlineStatus = () => ({
  type: Change_OnlineStatus,
});

/***@param {string} status */

export const changeTesxtstatus = (status) => ({
  type: Change_TextStatus,
  payload: status,
});

export const changeTesxtstatusAsync = () => {
  return (dispatch, getState) => {
    const b = getState();
    console.log(b);
    const { profile } = getState();
    console.log(profile);
    setTimeout(() => {
      dispatch(changeOnlineStatus());
    }, 3000);
  };
};
