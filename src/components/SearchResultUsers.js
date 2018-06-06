import React from "react";
import { GridList, GridTile } from "material-ui/GridList";
import IconButton from "material-ui/IconButton";
import ArrowForward from "material-ui/svg-icons/navigation/arrow-forward";
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

export default SearchResultUsers;
