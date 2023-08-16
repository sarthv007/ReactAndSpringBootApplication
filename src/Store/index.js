import { applyMiddleware, createStore } from "redux";
import RootReducer from "../Reducers";
import logger from "redux-logger";
import thunk from "redux-thunk";

const store = createStore(RootReducer, applyMiddleware(logger, thunk));

export default store;
