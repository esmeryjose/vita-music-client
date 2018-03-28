const initialState = {
    myPlaylist: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case "ADD_PLAYLIST":
            return { ...state, myPlaylist: action.payload };

        case "ADD_TRACK_TO_PLAYLIST":
            return {
                ...state,
                myPlaylist: {
                    pending_tracks: [
                        ...state.myPlaylist.pending_tracks,
                        action.payload
                    ]
                }
            };

        case "CLEAR_PLAYLIST":
            return initialState;

        default:
            return state;
    }
};
