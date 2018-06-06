import React, { Component } from "react";
import { connect } from "react-redux";
import { getUser } from "../actions/UserActions";
import FlatButton from "material-ui/FlatButton";
import { NavLink } from "react-router-dom";
import { getUserEvents } from "../actions/UserActions";
import { openCreateEventModal } from "../actions/EventsActions";
import UserEventsContainer from "../container/UserEventsContainer";
import { IsEmpty } from "../deliverables/Helpers";
import ProfileImage from "./ProfileImage";

class UserShow extends Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.getUser(id);
        this.props.getUserEvents(id);
    }

    componentWillReceiveProps(nextProps) {
        const currentPath = this.props.location.pathname;
        const nextPath = nextProps.location.pathname;

        if (IsEmpty(nextProps.user) && currentPath !== nextPath) {
            const { id } = nextProps.match.params;
            this.props.getUser(id);
            this.props.getUserEvents(id);
        }
    }

    renderCreateButton = () => {
        const { currentUserId, user } = this.props;
        if (currentUserId && !IsEmpty(user)) {
            if (currentUserId === user.id) {
                return (
                    <div className="create-event-button">
                        <FlatButton
                            label="Create Event"
                            onClick={this.props.openCreateEventModal}
                        />|
                        <NavLink to="/search">
                            <FlatButton label="Search" />
                        </NavLink>
                    </div>
                );
            }
        }
        return null;
    };

    render() {
        const { user } = this.props;

        return (
            <div>
                <div className="user-show-flex">
                    <div className="profile-item">
                        {!IsEmpty(user) ? <ProfileImage user={user} /> : null}
                        {this.renderCreateButton()}
                    </div>
                    <div className="event-item">
                        <UserEventsContainer />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ auth, users, userEvents }) => {
    const { isLoggedIn, currentUser } = auth;
    const { user } = users;
    return { isLoggedIn, currentUser, user, currentUserId: currentUser.id };
};

export default connect(
    mapStateToProps,
    {
        getUser,
        getUserEvents,
        openCreateEventModal
    }
)(UserShow);
