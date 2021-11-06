export const Set_GitData = "setGitData";
export const Set_Error = "SetError";
export const Set_Loading = "setLoading";

const API_URL_PUBLIC = "https://api.github.com/gists/public";

const setGitData = (data) => ({
  type: Set_GitData,
  payload: data,
});

const setLoading = (Loading) => ({
  type: Set_Loading,
  payload: Loading,
});

const setError = (Error) => ({
  type: Set_Error,
  payload: Error,
});

export const reqGit = () => {
  return async (dispatch, getState) => {
    dispatch(setLoading(true));
    dispatch(setError(false));
    fetch(API_URL_PUBLIC)
      .then((response) => response.json())
      .then((response) => {
        dispatch(setGitData(response[0]));
        dispatch(setLoading(false));
      })
      .catch((error) => {
        dispatch(setError(true));
        dispatch(setLoading(false));
        console.log(error);
      });
  };
};
