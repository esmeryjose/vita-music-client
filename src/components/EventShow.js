import React, { Component } from "react";
import { connect } from "react-redux";
import { getEvent } from "../actions/EventsActions";
import { searchTracks } from "../actions/SearchActions";
import { getPlaylist } from "../actions/PlaylistActions";
import EventBanner from "../components/EventBanner";
import TextField from "material-ui/TextField";
import TracksContainer from "../container/TracksContainer";
import { IsEmpty } from "../deliverables/Helpers";
import _ from "underscore";
import noEntry from "../assets/noEntry.png";

const styles = {
    floatingLabelFocusStyle: {
        color: "#6bc023"
    },
    underlineFocusStyle: {
        borderColor: "#6bc023"
    }
};

class EventShow extends Component {
    constructor() {
        super();
        this.state = {
            searchSong: ""
        };
    }

    handleChange = e => {
        const { value } = e.target;
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

    renderSearchArea = () => {
        const { selectionTracks, myPlaylist, event, currentUser } = this.props;

        // debugger;

        if (!IsEmpty(event) && !IsEmpty(currentUser)) {
            if (
                !!event.pending.find(
                    attendee => attendee.id === currentUser.id
                ) ||
                event.user_id === currentUser.id
            ) {
                return (
                    <div className="searchArea">
                        <div className="search-field-container center">
                            <TextField
                                onChange={this.handleChange}
                                hintText=""
                                floatingLabelText="Search for song..."
                                floatingLabelFocusStyle={
                                    styles.floatingLabelFocusStyle
                                }
                                underlineFocusStyle={styles.underlineFocusStyle}
                            />
                        </div>
                        <div>
                            <TracksContainer
                                selectionTracks={selectionTracks}
                            />
                        </div>
                        <div>
                            <TracksContainer
                                pendingTracks={myPlaylist.pending_tracks}
                            />
                        </div>
                    </div>
                );
            } else {
                return (
                    <div>
                        <div className="no-entry-div">
                            <img
                                className="no-entry-img"
                                src={noEntry}
                                alt="no-entry"
                            />
                        </div>
                    </div>
                );
            }
        }
        return null;
    };

    render() {
        return (
            <div>
                <div>
                    <EventBanner />
                </div>
                {this.renderSearchArea()}
            </div>
        );
    }
}

const mapStateToProps = ({ auth, search, events, playlist }) => {
    const { searchTracks } = search;
    const { myPlaylist } = playlist;
    const { event } = events;
    const { currentUser } = auth;
    return { selectionTracks: searchTracks, myPlaylist, event, currentUser };
};

export default connect(
    mapStateToProps,
    {
        getEvent,
        searchTracks,
        getPlaylist
    }
)(EventShow);
