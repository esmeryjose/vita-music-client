import User from "../adapters/User";
import Event from "../adapters/Event";

export const getUser = id => {
    return dispatch => {
        User.show(id).then(res => {
            dispatch({ type: "GET_USER", payload: res });
        });
    };
};

export const getUserEvents = id => {
    return dispatch => {
        Event.index(id).then(res => {
            dispatch({ type: "GET_USER_EVENTS", payload: res });
        });
    };
};
