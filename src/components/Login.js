import React from "react";
import FlatButton from "material-ui/FlatButton";

const Login = () => {
    return (
        <a href="http://localhost:3000/api/v1/auth">
            <FlatButton label="Login" secondary={true} />
        </a>
    );
};

export default Login;
