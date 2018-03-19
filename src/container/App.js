import React, { Component } from "react";
import { Route } from "react-router-dom";
import { getCurrentUser } from "../actions/AuthActions";
import { connect } from "react-redux";
import Callback from "../deliverables/Callback";
import { withRouter } from "react-router-dom";
import Login from "../components/Login";
import ShowPage from "../components/ShowPage";

class App extends Component {
    componentDidMount() {
        if (localStorage.getItem("token") && !this.props.isLoggedIn) {
            this.props.getCurrentUser();
        } else {
            this.props.history.push("/login");
        }
    }

    render() {
        return (
            <div>
                <Route exact path="/callback" component={Callback} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/users/:id" component={ShowPage} />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    isLoggedIn: state.auth.isLoggedIn,
    currentUser: state.auth.currentUser
});

export default withRouter(connect(mapStateToProps, { getCurrentUser })(App));
