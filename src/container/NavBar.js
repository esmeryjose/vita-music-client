import React, { Component } from "react";
import AppBar from "material-ui/AppBar";
import IconButton from "material-ui/IconButton";
import ActionHome from "material-ui/svg-icons/action/home";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import NavBarDropDown from "../components/NavBarDropDown";

const iconStyles = {
    marginRight: 24
};

class NavBar extends Component {
    state = {
        logged: true
    };

    handleChange = (event, logged) => {
        this.setState({ logged: logged });
    };

    render() {
        return (
            <div>
                <AppBar
                    title="Vita-Music"
                    iconElementLeft={
                        <IconButton>
                            <ActionHome style={iconStyles} />
                        </IconButton>
                    }
                    iconElementRight={<NavBarDropDown />}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    isLoggedIn: state.auth.isLoggedIn,
    currentUser: state.auth.currentUser
});

export default withRouter(connect(mapStateToProps, {})(NavBar));
