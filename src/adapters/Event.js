import Headers from "./Headers";

const url = "http://localhost:3000/api/v1/users";

export default class Event {
    static index(userId) {
        return fetch(`${url}/${userId}/events`, {
            method: "GET",
            headers: Headers()
        }).then(res => res.json());
    }

    static create(userId, form) {
        form.user_id = userId;
        const body = JSON.stringify({ event: form });

        return fetch(`${url}/${userId}/events`, {
            method: "POST",
            headers: Headers(),
            body: body
        }).then(res => res.json());
    }

    static show(userId, eventId) {
        return fetch(`${url}/${userId}/events/${eventId}`, {
            method: "GET",
            headers: Headers()
        }).then(res => res.json());
    }
}
