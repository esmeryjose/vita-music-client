import React from "react";
import FlatButton from "material-ui/FlatButton";
import { connect } from "react-redux";
import { logOutUser } from "../actions/AuthActions";

const ShowPage = ({ logOutUser, history }) => {
    const logOut = () => logOutUser(history);

    return (
        <div>
            This is a show page
            <FlatButton label="Log Out" secondary={true} onClick={logOut} />
        </div>
    );
};

const mapStateToProps = () => ({});

export default connect(mapStateToProps, { logOutUser })(ShowPage);
