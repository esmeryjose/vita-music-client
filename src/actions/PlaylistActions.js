import Playlist from "../adapters/Playlist";

export const getPlaylist = playlist_id => {
    return dispatch => {
        Playlist.show(playlist_id).then(res => {
            dispatch({ type: "ADD_PLAYLIST", payload: res });
        });
    };
};
export const clearPlaylist = () => {
    return dispatch => {
        dispatch({ type: "CLEAR_PLAYLIST" });
    };
};
