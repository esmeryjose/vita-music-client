import React, { Component } from "react";
import FlatButton from "material-ui/FlatButton";
import { connect } from "react-redux";
import { logOutUser } from "../actions/AuthActions";
import { getUser } from "../actions/UserActions";
import Loader from "../components/Loader";

class ShowPage extends Component {
    componentDidMount() {}

    logOut = () => {
        this.props.logOutUser(this.props.history);
    };
    render() {
        return (
            <div>
                This is a show page
                <FlatButton
                    label="Log Out"
                    secondary={true}
                    onClick={this.logOut}
                />
            </div>
        );
    }
}

const mapStateToProps = ({ auth }) => {
    const { isLoggedIn, currentUser } = auth;
    return { isLoggedIn, currentUser };
};

export default connect(mapStateToProps, { logOutUser })(ShowPage);
