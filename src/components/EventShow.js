import React, { Component } from "react";
import { connect } from "react-redux";
import { getEvent } from "../actions/EventsActions";
import { searchTracks } from "../actions/SearchActions";
import { getPlaylist } from "../actions/PlaylistActions";
import EventBanner from "../components/EventBanner";
import TextField from "material-ui/TextField";
import SpotifyPlayer from "react-spotify-player";
import TracksContainer from "../container/TracksContainer";
import { IsEmpty } from "../deliverables/Helpers";
import _ from "underscore";

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
        this.setState(
            { searchSong: value },
            _.debounce(this.getSearchTrack, 300)
        );
    };

    componentDidMount() {
        const ids = this.props.match.url.match(/\d+/g);
        this.props.getEvent(ids[0], ids[1]);
    }

    componentWillReceiveProps(nextProps) {
        if (!IsEmpty(nextProps.event) && IsEmpty(nextProps.myPlaylist)) {
            const { id } = nextProps.event.playlist;
            this.props.getPlaylist(id);
        }
    }

    getSearchTrack = () => {
        const { searchTracks } = this.props;
        searchTracks(this.state.searchSong);
    };

    render() {
        const { selectionTracks } = this.props;
        const { myPlaylist } = this.props;
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
                    <div>
                        <TracksContainer
                            pendingTracks={myPlaylist.pending_tracks}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ search, events, playlist }) => {
    const { searchTracks } = search;
    const { myPlaylist } = playlist;
    const { event } = events;
    return { selectionTracks: searchTracks, myPlaylist, event };
};
export default connect(mapStateToProps, {
    getEvent,
    searchTracks,
    getPlaylist
})(EventShow);
