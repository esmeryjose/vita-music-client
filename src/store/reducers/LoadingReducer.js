const initialState = {
    loading: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case "START_LOADING":
            return { loading: true };
        case "END_LOADING":
            return initialState;
        default:
            return state;
    }
};
