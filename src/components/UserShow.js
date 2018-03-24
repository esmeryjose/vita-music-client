import React, { Component } from "react";
import { connect } from "react-redux";
import { getUser } from "../actions/UserActions";
import { getUserEvents } from "../actions/UserActions";
import UserEventsContainer from "../container/UserEventsContainer";
import { IsEmpty } from "../deliverables/IsEmpty";

class UserShow extends Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.getUser(id);
        this.props.getUserEvents(id);
    }

    renderUserProfile = () => {
        const { user, events } = this.props;

        if (!IsEmpty(user) && !IsEmpty(events)) {
            const { profile_img_url } = this.props.user;

            return (
                <div>
                    <img src={profile_img_url} alt="spotifyImgUrl" />
                    <UserEventsContainer />
                </div>
            );
        }

        return null;
    };

    render() {
        return <div>{this.renderUserProfile()}</div>;
    }
}

const mapStateToProps = ({ auth, users, userEvents }) => {
    const { isLoggedIn, currentUser } = auth;
    const { user, events } = users;
    return { isLoggedIn, currentUser, user };
};

export default connect(mapStateToProps, { getUser, getUserEvents })(UserShow);
