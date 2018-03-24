import React, { Component } from "react";
import { connect } from "react-redux";
import { getEvent } from "../actions/EventsActions";
import { IsEmpty } from "../deliverables/IsEmpty";
import EventBanner from "../components/EventBanner";
import TextField from "material-ui/TextField";

class EventShow extends Component {
    constructor() {
        super();
        this.state = {
            searchSong: ""
        };
    }

    handleChange = e => {
        const { value } = e.target;
        this.setState({ searchSong: value });
        // Send the state to the action
        // send the request to my api
        // my api gets data from spotify and that data gets send to the reducer
    };

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

        if (!IsEmpty(event)) {
            return (
                <div>
                    <EventBanner />
                    <TextField
                        onChange={this.handleChange}
                        hintText=""
                        floatingLabelText="Search for song..."
                    />
                </div>
            );
        }

        return null;
    };

    render() {
        console.log(this.state);

        return <div>{this.renderEventDetail()}</div>;
    }
}

const mapStateToProps = ({ events }) => {
    const { event } = events;
    return { event };
};
export default connect(mapStateToProps, { getEvent })(EventShow);
