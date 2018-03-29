import Headers from "./Headers";

const url = "http://localhost:3000/api/v1/search/tracks";
const userEventUrl = "http://localhost:3000/api/v1/search";

export default class Search {
    static tracks(track) {
        return fetch(`${url}?q=${track}`, {
            method: "GET",
            headers: Headers()
        }).then(res => res.json());
    }

    static userEventSearch(q) {
        return fetch(`${userEventUrl}?q=${q}`, {
            method: "GET",
            headers: Headers()
        }).then(res => res.json());
    }
}
