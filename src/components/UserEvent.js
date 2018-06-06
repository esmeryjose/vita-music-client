import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Card, CardHeader, CardText } from "material-ui/Card";
import FloatingActionButton from "material-ui/FloatingActionButton";
import Delete from "material-ui/svg-icons/action/delete-forever";
import { deleteEvent } from "../actions/EventsActions";
import { IsEmpty } from "../deliverables/Helpers";
const style = {
    marginRight: 20,
    color: "#6bc023"
};

const UserEvent = ({ data, deleteEvent, currentUser, user }) => {
    const { title, description, location, id, user_id } = data;

    const handleDelete = () => deleteEvent(user_id, id);

    const renderDeleteButton = () => {
        if (!IsEmpty(currentUser) && !IsEmpty(user)) {
            if (currentUser.id === user.id) {
                return <DeleteButton handleClick={handleDelete} />;
            }
        }
        return null;
    };

    return (
        <div className="user-event-div">
            {renderDeleteButton()}
            <Card className="user-event-card">
                <Link to={`/users/${user_id}/events/${id}`}>
                    <CardHeader id={id} title={title} subtitle={location} />
                </Link>
                <CardText>{description}</CardText>
            </Card>
        </div>
    );
};

const DeleteButton = ({ handleClick }) => (
    <FloatingActionButton
        className="delete-event"
        mini={true}
        backgroundColor={"#6bc023"}
        style={style}
        onClick={handleClick}
    >
        <Delete />
    </FloatingActionButton>
);

const mapStateToProps = ({ auth, users }) => {
    const { currentUser } = auth;
    const { user } = users;
    return { currentUser, user };
};

export default connect(
    mapStateToProps,
    { deleteEvent }
)(UserEvent);
