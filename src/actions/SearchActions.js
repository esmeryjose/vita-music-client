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

export const searchUsersEvents = q => {
    return dispatch => {
        Search.userEventSearch(q).then(res => {
            const newResponse = {
                users: JSON.parse(res.users),
                events: JSON.parse(res.events)
            };
            dispatch({ type: "SEARCH_USERS_EVENTS", payload: newResponse });
        });
    };
};
