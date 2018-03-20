import React, { Component } from "react";
import { Route } from "react-router-dom";
import { getCurrentUser } from "../actions/AuthActions";
import { startLoader } from "../actions/LoaderActions";
import { connect } from "react-redux";
import Callback from "../deliverables/Callback";
import { withRouter } from "react-router-dom";
import Login from "../components/Login";
import ShowPage from "../components/ShowPage";
import Loader from "../components/Loader";

class App extends Component {
    componentDidMount() {
        if (this.props.location.pathname !== "/callback") {
            if (localStorage.getItem("token") && !this.props.isLoggedIn) {
                this.props.getCurrentUser();
            } else {
                this.props.history.push("/login");
            }
        }
    }

    renderLoader() {
        return <Loader />;
    }

    render() {
        return (
            <div>
                {this.props.loading ? this.renderLoader() : null}
                <Route exact path="/callback" component={Callback} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/users/:id" component={ShowPage} />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    isLoggedIn: state.auth.isLoggedIn,
    currentUser: state.auth.currentUser,
    loading: state.loader.loading
});

export default withRouter(
    connect(mapStateToProps, { getCurrentUser, startLoader })(App)
);
