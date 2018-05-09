import React, { Component } from "react";
import { TextField } from "material-ui";
import SearchContainer from "../container/SearchContainer";
import _ from "underscore";
import { connect } from "react-redux";
import { searchUsersEvents } from "../actions/SearchActions";

const styles = {
    floatingLabelFocusStyle: {
        color: "#6bc023"
    },
    underlineFocusStyle: {
        borderColor: "#6bc023"
    }
};

class Search extends Component {
    constructor() {
        super();
        this.state = {
            searchWord: ""
        };
    }

    handleChange = e => {
        const { value } = e.target;
        const { type } = e.target.dataset;

        this.setState({ [type]: value }, _.debounce(this.getUsersEvents, 200));
    };

    getUsersEvents = () => {
        const { searchUsersEvents } = this.props;
        searchUsersEvents(this.state.searchWord);
    };

    render() {
        return (
            <div>
                <div className="search-input-div center">
                    <TextField
                        data-type="searchWord"
                        hintText=""
                        floatingLabelText="Search..."
                        onChange={this.handleChange}
                        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                        underlineFocusStyle={styles.underlineFocusStyle}
                    />
                </div>

                <SearchContainer />
            </div>
        );
    }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps, { searchUsersEvents })(Search);
