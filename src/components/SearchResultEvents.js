import React from "react";
import { GridList, GridTile } from "material-ui/GridList";
import IconButton from "material-ui/IconButton";
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

export default SearchResultEvents;
