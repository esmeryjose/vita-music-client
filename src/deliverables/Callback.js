import react from "react";

// I need to dispatch from here

export const Callback = params => {
    if (!localStorage.getItem("token")) {
        const code = params.location.search.split("?code=")[1];

        // Auth.login(code).then(({ token, currentUser }) => {
        //     localStorage.setItem("token", token);
        //     this.setState({ loggedIn: true, currentUser }, () => {
        //         router.history.push("/profile");
        //     });
        // });
    }
    return null;
};
