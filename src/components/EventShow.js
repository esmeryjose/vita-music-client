import React, { Component } from "react";
import { connect } from "react-redux";
import { getEvent } from "../actions/EventsActions";
import { IsEmpty } from "../deliverables/IsEmpty";
import EventBanner from "../components/EventBanner";

class EventShow extends Component {
    componentDidMount() {
        const ids = this.props.match.url.match(/\d+/g);
        this.props.getEvent(ids[0], ids[1]);
    }

    handleAvatarChipClick = () => {
        console.log("chip has been clicked");
    };

    renderEventDetail = () => {
        const { event } = this.props;
        const { admin } = event;
        console.log(event);

        if (!IsEmpty(event)) {
            return (
                <div>
                    <EventBanner />
                </div>
            );
        }

        return null;
    };

    render() {
        return <div>{this.renderEventDetail()}</div>;
    }
}

const mapStateToProps = ({ events }) => {
    const { event } = events;
    return { event };
};
export default connect(mapStateToProps, { getEvent })(EventShow);
