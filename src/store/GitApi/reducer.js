import { Set_GitData, Set_Error, Set_Loading } from "./actions";

const initialState = {
  error: false,
  loading: false,
  data: {},
};

export const gitReducer = (state = initialState, action) => {
  switch (action.type) {
    case Set_Error: {
      const result = { ...state };
      result.error = action.payload;
      return result;
    }
    case Set_Loading: {
      const result = { ...state };
      result.loading = action.payload;
      return result;
    }
    case Set_GitData: {
      const result = { ...state };
      result.data = action.payload;
      return result;
    }

    default: {
      return state;
    }
  }
};
