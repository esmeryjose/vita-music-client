import React from "react";
import Track from "../components/Track";

const trackSrc = "https://open.spotify.com/embed?uri=";

const TracksContainer = ({ selectionTracks, pendingTracks }) => {
    if (!!selectionTracks && !!selectionTracks.length) {
        return <SelectionTracks selectionTracks={selectionTracks} />;
    } else if (!!pendingTracks && !!pendingTracks.length) {
        return <AddedTracks pendingTracks={pendingTracks} />;
    }
    return null;
};

const SelectionTracks = ({ selectionTracks }) => {
    const renderTrack = (track, i) => <Track key={i} data={track} />;

    return (
        <div className="tracks-container">
            {selectionTracks.map(renderTrack)}
        </div>
    );
};

const AddedTracks = ({ pendingTracks }) => {
    const renderIframe = (track, id) => (
        <iframe
            title={id}
            key={id}
            className="track"
            src={`${trackSrc}${track.uri}&theme=white`}
            width="100%"
            height="80"
            frameBorder="0"
            allowtransparency="true"
            allow="encrypted-media"
        />
    );

    return (
        <div className="pending-tracks-margin">
            <p>Added Tracks</p>
            <div className="pending-tracks-container">
                {pendingTracks.map(renderIframe)}
            </div>
        </div>
    );
};

export default TracksContainer;
