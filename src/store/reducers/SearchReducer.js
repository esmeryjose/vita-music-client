const initialState = {
    searchTracks: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case "SEARCH_TRACKS":
            return { ...state, searchTracks: action.payload };

        case "CLEAR_SEARCH":
            return initialState;

        default:
            return state;
    }
};
