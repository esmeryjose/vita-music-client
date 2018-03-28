import React from "react";
import IconButton from "material-ui/IconButton";
import IconMenu from "material-ui/IconMenu";
import MenuItem from "material-ui/MenuItem";
import MoreVertIcon from "material-ui/svg-icons/navigation/more-vert";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { logOutUser } from "../actions/AuthActions";
import Avatar from "material-ui/Avatar";
import Chip from "material-ui/Chip";
import rockOn from "../assets/rockOn.jpg";

const NavBarDropDown = ({ logOutUser, history, currentuser }) => {
    const logOut = () => {
        logOutUser(history);
    };

    const home = () => {
        const { id } = currentuser;
        history.push(`/users/${id}`);
    };

    let imgUrl = currentuser.profile_img_url;
    if (!imgUrl) {
        imgUrl = rockOn;
    }

    return (
        <IconMenu
            iconButtonElement={
                <IconButton>
                    <MoreVertIcon />
                </IconButton>
            }
            targetOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "top" }}
            iconStyle={{ fill: "#6bc023" }}
        >
            <MenuItem onClick={home}>
                <Avatar src={imgUrl} />
                <span className="home-avatar">Home</span>
            </MenuItem>
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
