const initialState = {
    isLoggedIn: false,
    currentUser: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case "LOG_IN":
            return { isLoggedIn: true, currentUser: action.payload };
            break;
        case "LOG_OUT":
            return initialState;
            break;
        default:
            return state;
            break;
    }
};
