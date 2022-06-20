import loadingReducer from "./loadingReducer";
import imageReducer from "./imageReducer";
import errorReducer from "./errorReducer";
import navbarToggle from "./navbarToggle";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  isLoading: loadingReducer,
  images: imageReducer,
  error: errorReducer,
  navbarToggle: navbarToggle,
});

export default rootReducer;
