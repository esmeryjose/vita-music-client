import React from "react";
import Track from "../components/Track";

const TracksContainer = ({ selectionTracks }) => {
    if (!!selectionTracks.length) {
        return (
            <div className="tracks-container">
                {selectionTracks.map(renderTrack)}
            </div>
        );
    }
    return null;
};

const renderTrack = (track, i) => <Track key={i} data={track} />;

const mapStateToProps = () => ({});

export default TracksContainer;
