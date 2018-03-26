import React from "react";
import { connect } from "react-redux";
import UserEvent from "../components/UserEvent";
import FloatingActionButton from "material-ui/FloatingActionButton";
import ContentAdd from "material-ui/svg-icons/content/add";

const style = {
    marginRight: 20
};
const trackSrc = "https://open.spotify.com/embed?uri=";

const Track = ({ data }) => (
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
        <AddButton />
    </div>
);

const AddButton = () => (
    <FloatingActionButton
        className="add-button"
        mini={true}
        secondary={true}
        style={style}
    >
        <ContentAdd />
    </FloatingActionButton>
);

const mapStateToProps = () => ({});

/*
Make the onclick action which will send the song id the to api and add it to the playlist
*/
export default connect(mapStateToProps, {})(Track);
