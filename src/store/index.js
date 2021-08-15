import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import album from "./reducer/album";

const reducers = combineReducers({
  album: album,
});

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);
export default store;
