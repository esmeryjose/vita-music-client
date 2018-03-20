import Headers from "./Headers";

const url = "http://localhost:3000/api/v1";

export default class Auth {
    static login(code) {
        return fetch(`${url}/login`, {
            method: "POST",
            headers: Headers(),
            body: JSON.stringify({ code })
        }).then(res => res.json());
    }

    static currentUser() {
        return fetch(`${url}/sessions/current_user`, {
            method: "GET",
            headers: Headers()
        }).then(res => res.json());
    }
}
