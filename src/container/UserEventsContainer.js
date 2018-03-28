import React from "react";
import { connect } from "react-redux";
import UserEvent from "../components/UserEvent";
import { IsEmpty } from "../deliverables/Helpers";

const UserEventsContainer = ({ events }) => {
    const renderEvent = (event, i) => <UserEvent key={i} data={event} />;
    return <div>{events.map(renderEvent)}</div>;
};

const mapStateToProps = ({ users }) => {
    const { events } = users;
    return { events };
};

export default connect(mapStateToProps, {})(UserEventsContainer);
