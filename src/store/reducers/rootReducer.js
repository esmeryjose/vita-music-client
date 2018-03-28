import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import LoadingReducer from "./LoadingReducer";
import UserReducer from "./UserReducer";
import EventsReducer from "./EventsReducer";
import SearchReducer from "./SearchReducer";
import PlaylistReducer from "./PlaylistReducer";

export default combineReducers({
    auth: AuthReducer,
    loader: LoadingReducer,
    users: UserReducer,
    events: EventsReducer,
    search: SearchReducer,
    playlist: PlaylistReducer
});
