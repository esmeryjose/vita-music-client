import React, { Component } from "react";
import { connect } from "react-redux";
import { getEvent } from "../actions/EventsActions";
import { searchTracks } from "../actions/SearchActions";
import { IsEmpty } from "../deliverables/IsEmpty";
import EventBanner from "../components/EventBanner";
import TextField from "material-ui/TextField";
import SpotifyPlayer from "react-spotify-player";
import TracksContainer from "../container/TracksContainer";

class EventShow extends Component {
    constructor() {
        super();
        this.state = {
            searchSong: ""
        };
    }

    handleChange = e => {
        const { value } = e.target;
        const { searchTracks } = this.props;
        this.setState({ searchSong: value }, () =>
            searchTracks(this.state.searchSong)
        );
    };

    componentDidMount() {
        const ids = this.props.match.url.match(/\d+/g);
        this.props.getEvent(ids[0], ids[1]);
    }

    render() {
        const { selectionTracks } = this.props;

        return (
            <div>
                <div>
                    <EventBanner />
                </div>
                <div className="searchArea">
                    <div className="search-field-container center">
                        <TextField
                            onChange={this.handleChange}
                            hintText=""
                            floatingLabelText="Search for song..."
                        />
                    </div>
                    <div>
                        <TracksContainer selectionTracks={selectionTracks} />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ search }) => {
    const { searchTracks } = search;
    return { selectionTracks: searchTracks };
};
export default connect(mapStateToProps, { getEvent, searchTracks })(EventShow);
