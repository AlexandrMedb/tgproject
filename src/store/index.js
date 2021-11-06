import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { chatListReducer } from "./Chat";
import { profileReducer } from "./profile/reducer";
import { gitReducer } from "./GitApi";

const rootReducer = combineReducers({
  profile: profileReducer,
  chatList: chatListReducer,
  gitApi: gitReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

// const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

// export const persistor = persistStore(store);
