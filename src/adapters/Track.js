import Headers from "./Headers";

const url = "http://localhost:3000/api/v1/playlists/";

export default class Track {
    static create(my_playlist_id, spotify_id, uri) {
        const body = JSON.stringify({
            track: {
                spotify_id: spotify_id,
                uri: uri,
                playlist_id: my_playlist_id
            }
        });
        return fetch(`${url}${my_playlist_id}/tracks`, {
            method: "POST",
            headers: Headers(),
            body: body
        }).then(res => res.json());
    }
}
