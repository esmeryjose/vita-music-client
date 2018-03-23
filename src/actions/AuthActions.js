import Auth from "../adapters/Auth";

export const loginUser = (code, history) => {
    return dispatch => {
        Auth.login(code).then(res => {
            localStorage.setItem("token", res.token);
            const userId = res.currentUser.id;
            dispatch({ type: "END_LOADING" });
            dispatch({ type: "LOG_IN", payload: res.currentUser });
            history.push(`/users/${userId}`);
        });
    };
};

export const getCurrentUser = () => {
    return dispatch => {
        Auth.currentUser().then(res => {
            dispatch({ type: "LOG_IN", payload: res });
        });
    };
};

export const logOutUser = history => {
    return dispatch => {
        localStorage.clear();
        dispatch({ type: "LOG_OUT" });
        history.push(`/login`);
    };
};
