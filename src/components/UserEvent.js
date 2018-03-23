import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Card, CardActions, CardHeader, CardText } from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";

class UserEvent extends Component {
    render() {
        const { title, description, location, id, user_id } = this.props.data;

        return (
            <div>
                <Card>
                    <Link to={`/users/${user_id}/events/${id}`}>
                        <CardHeader id={id} title={title} subtitle={location} />
                    </Link>
                    <CardText>{description}</CardText>
                </Card>
            </div>
        );
    }
}

const mapStateToProps = ({ auth, userShowView, userEvents }) => ({});

export default connect(mapStateToProps, {})(UserEvent);
