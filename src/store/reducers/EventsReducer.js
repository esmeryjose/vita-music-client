export default (state = {}, action) => {
    switch (action.type) {
        case "GET_USER_EVENTS":
            return { events: action.payload };
        default:
            return state;
    }
};
