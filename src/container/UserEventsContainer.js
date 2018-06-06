import React from "react";
import { connect } from "react-redux";
import UserEvent from "../components/UserEvent";

const UserEventsContainer = ({ events }) => {
    const renderEvent = (event, i) => <UserEvent key={i} data={event} />;

    if (!!events.length) {
        return (
            <div className="user-event-container">
                {events.map(renderEvent)}
            </div>
        );
    }
    return null;
};

const mapStateToProps = ({ users }) => {
    const { events } = users;
    return { events };
};

export default connect(
    mapStateToProps,
    {}
)(UserEventsContainer);
