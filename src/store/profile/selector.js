export const getOnline = (store) => store.profile.onlineStatus;

export const getTextStatus = (store) => store.profile.tesxtstatus;

export const cprofileSelectors = {
  getOnline,
  getTextStatus,
};
