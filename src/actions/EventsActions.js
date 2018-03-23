import Event from "../adapters/Event";

export const getEvent = (userId, eventId) => {
    return dispatch => {
        Event.show(userId, eventId).then(res => {
            dispatch({ type: "GET_EVENT", payload: res });
        });
    };
};
