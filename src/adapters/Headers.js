const Headers = () => {
    return {
        "content-type": "application/json",
        accept: "application/json",
        Authorization: `Token ${localStorage.getItem("token")}`
    };
};

export default Headers;
