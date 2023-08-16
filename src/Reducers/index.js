import { combineReducers } from "redux";
import { PostsReducer } from "./PostReducer";
import { UserReducer } from "./UserReducer";

const RootReducer = combineReducers({
  postData: PostsReducer,
  user: UserReducer,
});

export default RootReducer;
