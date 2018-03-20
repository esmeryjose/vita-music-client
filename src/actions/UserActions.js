import User from "../adapters/User";

export const getUser = id => {
    return dispatch => {
        User.show(id).then(res => {
            dispatch({ type: "USER_DATA", payload: res });
        });
    };
};
