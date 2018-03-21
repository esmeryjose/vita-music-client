import Headers from "./Headers";

const url = "http://localhost:3000/api/v1/users";

export default class Event {
    static index(id) {
        return fetch(`${url}/${id}/events`, {
            method: "GET",
            headers: Headers()
        }).then(res => res.json());
    }
}
