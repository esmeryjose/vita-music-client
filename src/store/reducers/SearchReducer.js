const initialState = {
    searchTracks: [],
    usersAndEvents: {
        users: [],
        events: []
    }
};

export default (state = initialState, action) => {
    switch (action.type) {
        case "SEARCH_TRACKS":
            return { ...state, searchTracks: action.payload };

        case "CLEAR_SEARCH":
            return initialState;

        case "SEARCH_USERS_EVENTS":
            return { ...state, usersAndEvents: action.payload };
        default:
            return state;
    }
};
