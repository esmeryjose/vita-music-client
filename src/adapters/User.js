import Headers from "./Headers";

const url = "http://localhost:3000/api/v1/users";

export default class User {
    static show(id) {
        return fetch(`${url}/${id}`, {
            method: "GET",
            headers: Headers()
        }).then(res => res.json());
    }
}
