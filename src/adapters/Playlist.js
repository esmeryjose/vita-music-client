import Headers from "./Headers";

const url = "http://localhost:3000/api/v1/playlists/";

export default class Playlist {
    static show(playlist_id) {
        return fetch(`${url}${playlist_id}/`, {
            method: "GET",
            headers: Headers()
        }).then(res => res.json());
    }
}
