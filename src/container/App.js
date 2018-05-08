import React, { Component } from "react";
import { Route } from "react-router-dom";
import { getCurrentUser } from "../actions/AuthActions";
import { startLoader } from "../actions/LoaderActions";
import { connect } from "react-redux";
import Callback from "../deliverables/Callback";
import { withRouter } from "react-router-dom";
import Login from "../components/Login";
import UsersRouteContainer from "./UsersRouteContainer";
import Loader from "../components/Loader";
import NavBar from "../container/NavBar";
import { clearSearch } from "../actions/SearchActions";
import { clearPlaylist } from "../actions/PlaylistActions";
import { clearUser } from "../actions/UserActions";
import Search from "../components/Search";
import CreateEventModal from "../components/CreateEventModal";

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

    componentWillReceiveProps(nextProps) {
        if (this.props.location.pathname !== nextProps.location.pathname) {
            this.props.clearSearch();
            this.props.clearPlaylist();
            this.props.clearUser();
        }
        if (this.props.location.pathname === "/" && nextProps.isLoggedIn) {
            this.props.history.push(`/users/${nextProps.currentUser.id}`);
        }
    }

    render() {
        return (
            <div>
                <CreateEventModal />
                {this.props.isLoggedIn ? <NavBar /> : null}
                {this.props.loading ? <Loader /> : null}
                <Route exact path="/callback" component={Callback} />
                <Route exact path="/login" component={Login} />
                <Route path="/users" component={UsersRouteContainer} />
                <Route path="/search" component={Search} />
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
    connect(mapStateToProps, {
        getCurrentUser,
        startLoader,
        clearSearch,
        clearPlaylist,
        clearUser
    })(App)
);
