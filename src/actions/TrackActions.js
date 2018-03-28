import Track from "../adapters/Track";

export const addTrackToPlaylist = (my_playlist_id, trackId, uri) => {
    return dispatch => {
        Track.create(my_playlist_id, trackId, uri).then(res => {
            dispatch({ type: "ADD_TRACK_TO_PLAYLIST", payload: res });
        });
    };
};
