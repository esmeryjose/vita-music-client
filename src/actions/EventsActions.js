import Event from "../adapters/Event";

export const getUserEvents = id => {
    return dispatch => {
        Event.index(id).then(res => {
            dispatch({ type: "GET_USER_EVENTS", payload: res });
        });
    };
};
