import Headers from "./Headers";

const url = "http://localhost:3000/api/v1/rsvps";

export default class Rsvp {
    static create(userId, eventId) {
        const body = JSON.stringify({
            rsvp: {
                user_id: userId,
                event_id: eventId
            }
        });

        return fetch(`${url}`, {
            method: "POST",
            headers: Headers(),
            body: body
        }).then(res => res.json());
    }
}
