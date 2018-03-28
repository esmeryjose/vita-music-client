import Rsvp from "../adapters/Rsvp";

export const createRsvp = (userId, eventId) => {
    return dispatch => {
        Rsvp.create(userId, eventId).then(res => {
            dispatch({ type: "ADD_USER_TO_PENDING", payload: res });
        });
    };
};
