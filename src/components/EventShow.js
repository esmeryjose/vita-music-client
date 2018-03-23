import React, { Component } from "react";
import { connect } from "react-redux";
import { getEvent } from "../actions/EventsActions";
import { IsEmpty } from "../deliverables/IsEmpty";

class EventShow extends Component {
    componentDidMount() {
        const ids = this.props.match.url.match(/\d+/g);
        this.props.getEvent(ids[0], ids[1]);
    }

    renderEventDetail = () => {
        return <div>This is the content of an event</div>;
    };
    render() {
        const { event } = this.props;
        console.log(event);

        return <div>{!IsEmpty(event) ? this.renderEventDetail() : null}</div>;
    }
}

const mapStateToProps = ({ events }) => {
    const { event } = events;
    return { event };
};
export default connect(mapStateToProps, { getEvent })(EventShow);
