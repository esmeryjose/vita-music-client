import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import LoadingReducer from "./LoadingReducer";
import UserReducer from "./UserReducer";
import EventsReducer from "./EventsReducer";

export default combineReducers({
    auth: AuthReducer,
    loader: LoadingReducer,
    users: UserReducer,
    events: EventsReducer
    // userEvents: EventsReducer
});
