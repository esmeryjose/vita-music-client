const initialState = {
    event: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case "GET_EVENT":
            return { ...state, event: action.payload };
        default:
            return state;
    }
};
