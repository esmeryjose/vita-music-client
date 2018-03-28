import React, { Component } from "react";
import AppBar from "material-ui/AppBar";
import IconButton from "material-ui/IconButton";
import ActionHome from "material-ui/svg-icons/action/home";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import NavBarDropDown from "../components/NavBarDropDown";
import logo from "../assets/logoVitaMusic.png";

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
