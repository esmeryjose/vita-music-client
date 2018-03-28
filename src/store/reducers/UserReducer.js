const initialState = {
    user: {},
    events: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case "GET_USER":
            return { ...state, user: action.payload };
        case "GET_USER_EVENTS":
            return { ...state, events: action.payload };
        case "ADD_USER_EVENTS":
            return { ...state, events: [...state.events, action.payload] };
        case "CLEAR_USER":
            return initialState;
        case "DELETE_USER_EVENT":
            const { id } = action.payload;
            const filteredEvents = state.events.filter(
                event => event.id !== id
            );
            return { ...state, events: filteredEvents };
        default:
            return state;
    }
};
