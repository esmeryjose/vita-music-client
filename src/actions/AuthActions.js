import Auth from "../adapters/Auth";

export const LoginUser = code => {
    return dispatch => {
        return Auth.login(code).then(res => {
            // now we have to save the JWT token and dispatch an acion that will update the
            // store with the response
        });
    };
};

export const currentUser = () => {
    return dispatch => {
        return Auth.currentUser().then(res => {
            // now we have to dispatch an action that will update the current user in the store
        });
    };
};

export const logoutUser = () => {
    return { type: "LOGOUT_USER" };
};
