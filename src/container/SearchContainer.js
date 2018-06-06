import React from "react";
import SearchResultEvents from "../components/SearchResultEvents";
import SearchResultUsers from "../components/SearchResultUsers";
import { connect } from "react-redux";

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
