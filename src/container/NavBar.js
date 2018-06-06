import React, { Component } from "react";
import AppBar from "material-ui/AppBar";
import IconButton from "material-ui/IconButton";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import NavBarDropDown from "../components/NavBarDropDown";
import Notification from "../components/Notification";
import logo from "../assets/logoVitaMusic.png";

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
                    style={{ backgroundColor: "#ECEBEB" }}
                    title="Vita-Music"
                    titleStyle={{ color: "#6bc023" }}
                    iconElementLeft={
                        <IconButton>
                            <img
                                className="icon-logo"
                                src={logo}
                                height="140%"
                                width="140%"
                                alt=""
                            />
                        </IconButton>
                    }
                    iconElementRight={
                        <div>
                            <Notification />
                            <NavBarDropDown />
                        </div>
                    }
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    isLoggedIn: state.auth.isLoggedIn,
    currentUser: state.auth.currentUser
});

export default withRouter(
    connect(
        mapStateToProps,
        {}
    )(NavBar)
);
