import React from "react";

const Login = () => {
    return (
        <div className="login-background">
            <h1 className="login-title">VITA-MUSIC</h1>
            <div className="login-page">
                <a className="login-a" href="http://localhost:3000/api/v1/auth">
                    {" "}
                    LOGIN
                </a>{" "}
                |{" "}
                <a className="login-a" href="https://www.spotify.com/us/">
                    SIGN UP
                </a>
            </div>
        </div>
    );
};

export default Login;
