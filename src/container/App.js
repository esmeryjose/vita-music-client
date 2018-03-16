import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { Callback } from "../deliverables/Callback";
import FlatButton from "material-ui/FlatButton";
import { Link } from "react-router-dom";

class App extends Component {
    render() {
        return (
            <div>
                <a href="http://localhost:3000/api/v1/auth">
                    <FlatButton label="Login" secondary={true} />
                </a>
                <Route exact path="/callback" component={Callback} />
            </div>
        );
    }
}

// this two fucntions are incomplete
const mapStateToProps = state => ({});
const mapDispatchToProps = () => ({});
export default connect(mapStateToProps, mapDispatchToProps)(App);
