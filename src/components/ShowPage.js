import React, { Component } from "react";
import FlatButton from "material-ui/FlatButton";
import { connect } from "react-redux";
import { logOutUser } from "../actions/AuthActions";
import { getUser } from "../actions/UserActions";
import { getUserEvents } from "../actions/EventsActions";
import Loader from "../components/Loader";

class ShowPage extends Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.getUser(id);
        this.props.getUserEvents(id);
    }

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

const mapStateToProps = ({ auth, userShowView, userEvents }) => {
    const { isLoggedIn, currentUser } = auth;
    const { user } = userShowView;
    const { events } = userEvents;
    return { isLoggedIn, currentUser, user, events };
};

export default connect(mapStateToProps, { logOutUser, getUser, getUserEvents })(
    ShowPage
);
