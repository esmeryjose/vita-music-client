import React from "react";
import { GridList, GridTile } from "material-ui/GridList";
import IconButton from "material-ui/IconButton";
import ArrowForward from "material-ui/svg-icons/navigation/arrow-forward";
import SearchResultEvents from "../components/SearchResultEvents";
import SearchResultUsers from "../components/SearchResultUsers";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import rockOn from "../assets/rockOn.jpg";

const SearchContainer = ({ usersAndEvents }) => {
    const { users, events } = usersAndEvents;
    return (
        <div className="my-search-container">
            <SearchResultEvents events={events} />
            <SearchResultUsers users={users} />
        </div>
    );
};

const mapStateToProps = ({ search }) => {
    const { usersAndEvents } = search;
    return { usersAndEvents };
};

export default connect(
    mapStateToProps,
    {}
)(SearchContainer);
