import Event from "../adapters/Event";

export const getEvent = (userId, eventId) => {
    return dispatch => {
        Event.show(userId, eventId).then(res => {
            dispatch({ type: "GET_EVENT", payload: res });
        });
    };
};

export const createEvent = (userId, form) => {
    return dispatch => {
        Event.create(userId, form).then(res => {
            dispatch({ type: "ADD_USER_EVENTS", payload: res });
        });
    };
};

export const deleteEvent = (userId, eventId) => {
    return dispatch => {
        Event.destroy(userId, eventId).then(res => {
            dispatch({ type: "DELETE_USER_EVENT", payload: res });
        });
    };
};
export const openCreateEventModal = () => {
    return dispatch => {
        dispatch({ type: "OPEN_CREATE_EVENT_MODAL" });
    };
};
export const closeCreateEventModal = () => {
    return dispatch => {
        dispatch({ type: "CLOSE_CREATE_EVENT_MODAL" });
    };
};
