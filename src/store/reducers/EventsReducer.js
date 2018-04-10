const initialState = {
    createEventModal: false,
    event: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case "GET_EVENT":
            return { ...state, event: action.payload };
        case "ADD_USER_TO_PENDING":
            const newPending = [
                ...state.event.pending,
                action.payload.attendee
            ];

            return {
                ...state,
                event: {
                    ...state.event,
                    pending: newPending
                }
            };
        case "OPEN_CREATE_EVENT_MODAL":
            return { ...state, createEventModal: true };
        case "CLOSE_CREATE_EVENT_MODAL":
            return { ...state, createEventModal: false };
        default:
            return state;
    }
};
