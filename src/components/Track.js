import React from "react";
import { connect } from "react-redux";
import UserEvent from "../components/UserEvent";
import FloatingActionButton from "material-ui/FloatingActionButton";
import ContentAdd from "material-ui/svg-icons/content/add";
import { addTrackToPlaylist } from "../actions/TrackActions";

const style = {
    marginRight: 20
};
const trackSrc = "https://open.spotify.com/embed?uri=";

const Track = ({ data, playlist, addTrackToPlaylist }) => {
    const handleClick = () => {
        const { spotify_id, uri } = data;
        const my_playlist_id = playlist.id;
        addTrackToPlaylist(my_playlist_id, spotify_id, uri);
    };
    return (
        <div className="whole-track">
            <iframe
                className="track"
                src={`${trackSrc}${data.uri}&theme=white`}
                width="30%"
                height="80"
                frameBorder="0"
                allowtransparency="true"
                allow="encrypted-media"
            />
            <AddButton handleClick={handleClick} />
        </div>
    );
};

const AddButton = ({ handleClick }) => (
    <FloatingActionButton
        onClick={handleClick}
        className="add-button"
        mini={true}
        secondary={true}
        style={style}
    >
        <ContentAdd />
    </FloatingActionButton>
);

const mapStateToProps = ({ events }) => {
    const { playlist } = events.event;
    return { playlist };
};

/*
Make the onclick action which will send the song id the to api and add it to the playlist
*/
export default connect(mapStateToProps, { addTrackToPlaylist })(Track);
