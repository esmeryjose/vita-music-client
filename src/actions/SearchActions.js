import Search from "../adapters/Search";

export const searchTracks = track => {
    return dispatch => {
        Search.tracks(track).then(res => {
            dispatch({ type: "SEARCH_TRACKS", payload: res });
        });
    };
};

export const clearSearch = () => {
    return dispatch => {
        dispatch({ type: "CLEAR_SEARCH" });
    };
};
