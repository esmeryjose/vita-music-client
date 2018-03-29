import React from "react";
import { GridList, GridTile } from "material-ui/GridList";
import IconButton from "material-ui/IconButton";
import Subheader from "material-ui/Subheader";
import ArrowForward from "material-ui/svg-icons/navigation/arrow-forward";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import rockOn from "../assets/rockOn.jpg";

const styles = {
    root: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around"
    },
    gridList: {
        width: 500,
        height: 450,
        overflowY: "auto"
    }
};

const SearchContainer = ({ usersAndEvents }) => {
    const { users, events } = usersAndEvents;
    return (
        <div className="my-search-container">
            <SearchResultEvents events={events} />
            <SearchResultUsers users={users} />
        </div>
    );
};

const SearchResultUsers = ({ users }) => {
    return (
        <div className="search-result-div search-right" style={styles.root}>
            <div className="search-title-div">USERS</div>
            <GridList cellHeight={180} style={styles.gridList}>
                {users.map((user, i) => (
                    <GridTile
                        className="gridtile"
                        key={i}
                        title={user.display_name}
                        actionIcon={
                            <Link to={`/users/${user.id}`}>
                                <IconButton>
                                    <ArrowForward color="white" />
                                </IconButton>
                            </Link>
                        }
                    >
                        <img
                            src={
                                user.profile_img_url
                                    ? user.profile_img_url
                                    : rockOn
                            }
                            alt={`profile-${user.id}`}
                        />
                    </GridTile>
                ))}
            </GridList>
        </div>
    );
};

const SearchResultEvents = ({ events }) => {
    return (
        <div className="search-result-div search-left" style={styles.root}>
            <div className="search-title-div">EVENTS</div>
            <GridList cellHeight={100} style={styles.gridList}>
                {events.map((event, i) => (
                    <GridTile
                        key={i}
                        title={event.title}
                        subtitle={
                            <span>
                                {event.description}
                                <br />
                                by{" "}
                                <b>
                                    <Link to={`/users/${event.admin.id}`}>
                                        {event.admin.display_name}
                                    </Link>
                                </b>
                            </span>
                        }
                        actionIcon={
                            <Link
                                to={`/users/${event.admin.id}/events/${
                                    event.id
                                }`}
                            >
                                <IconButton>
                                    <ArrowForward color="white" />
                                </IconButton>
                            </Link>
                        }
                    />
                ))}
            </GridList>
        </div>
    );
};

const mapStateToProps = ({ search }) => {
    const { usersAndEvents } = search;
    return { usersAndEvents };
};

export default connect(mapStateToProps, {})(SearchContainer);
