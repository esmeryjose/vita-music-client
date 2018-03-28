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
        default:
            return state;
    }
};
