import React from "react";
import IconButton from "material-ui/IconButton";
import IconMenu from "material-ui/IconMenu";
import MenuItem from "material-ui/MenuItem";
import MoreVertIcon from "material-ui/svg-icons/navigation/more-vert";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { logOutUser } from "../actions/AuthActions";

const NavBarDropDown = props => {
    const logOut = () => {
        props.logOutUser(props.history);
    };

    const home = () => {
        const { id } = props.currentuser;
        props.history.push(`/users/${id}`);
    };

    return (
        <IconMenu
            {...props}
            iconButtonElement={
                <IconButton>
                    <MoreVertIcon />
                </IconButton>
            }
            targetOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "top" }}
        >
            <MenuItem primaryText="Home" onClick={home} />
            <MenuItem primaryText="Create Event" onClick={logOut} />
            <MenuItem primaryText="Sign out" onClick={logOut} />
        </IconMenu>
    );
};

NavBarDropDown.muiName = "IconMenu";

const mapStateToProps = ({ auth }) => ({
    currentuser: auth.currentUser
});

export default withRouter(
    connect(mapStateToProps, { logOutUser })(NavBarDropDown)
);
