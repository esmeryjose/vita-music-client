import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Card, CardActions, CardHeader, CardText } from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";
import FloatingActionButton from "material-ui/FloatingActionButton";
import Delete from "material-ui/svg-icons/action/delete-forever";
import lightGreen500 from "material-ui/styles/colors";
import { deleteEvent } from "../actions/EventsActions";

const style = {
    marginRight: 20,
    color: "#6bc023"
};

const UserEvent = ({ data, deleteEvent }) => {
    const { title, description, location, id, user_id } = data;

    const handleDelete = () => deleteEvent(user_id, id);

    return (
        <div className="user-event-div">
            <DeleteButton handleClick={handleDelete} />
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

const mapStateToProps = ({ auth, userShowView, userEvents }) => ({});

export default connect(mapStateToProps, { deleteEvent })(UserEvent);
