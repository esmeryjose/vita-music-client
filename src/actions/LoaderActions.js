export const startLoader = () => {
    return dispatch => {
        dispatch({ type: "START_LOADING" });
    };
};

export const endLoader = (code, history) => {
    return dispatch => {
        dispatch({ type: "END_LOADING" });
    };
};
