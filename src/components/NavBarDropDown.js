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
import { openCreateEventModal } from "../actions/EventsActions";

const NavBarDropDown = ({
    logOutUser,
    history,
    currentuser,
    openCreateEventModal
}) => {
    const logOut = () => {
        logOutUser(history);
    };

    const home = () => {
        const { id } = currentuser;
        history.push(`/users/${id}`);
    };

    const search = () => {
        history.push(`/search`);
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
            <MenuItem primaryText="Search" onClick={search} />
            <MenuItem
                primaryText="Create Event"
                onClick={openCreateEventModal}
            />
            <MenuItem primaryText="Sign out" onClick={logOut} />
        </IconMenu>
    );
};

NavBarDropDown.muiName = "IconMenu";

const mapStateToProps = ({ auth }) => ({
    currentuser: auth.currentUser
});

export default withRouter(
    connect(mapStateToProps, {
        logOutUser,
        openCreateEventModal
    })(NavBarDropDown)
);
