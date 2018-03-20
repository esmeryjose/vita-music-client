import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import LoadingReducer from "./LoadingReducer";
import UserReducer from "./UserReducer";

export default combineReducers({
    auth: AuthReducer,
    Loader: LoadingReducer,
    User: UserReducer
});
