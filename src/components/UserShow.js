import React, { Component } from "react";
import { connect } from "react-redux";
import { getUser } from "../actions/UserActions";
import { getUserEvents } from "../actions/UserActions";
import UserEventsContainer from "../container/UserEventsContainer";
import { IsEmpty } from "../deliverables/Helpers";
import CreateEventModal from "./CreateEventModal";
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

    render() {
        const { user } = this.props;

        return (
            <div>
                <div className="user-show-flex">
                    <div className="profile-item">
                        {!IsEmpty(user) ? <ProfileImage user={user} /> : null}
                        <CreateEventModal />
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
    const { user, events } = users;
    return { isLoggedIn, currentUser, user };
};

export default connect(mapStateToProps, { getUser, getUserEvents })(UserShow);
