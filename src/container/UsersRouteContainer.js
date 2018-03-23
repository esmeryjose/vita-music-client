import React from "react";
import { Route, Switch } from "react-router-dom";
import UserShow from "../components/UserShow";
import UserEventsContainer from "./UserEventsContainer";
import EventShow from "../components/EventShow";

const UsersRouteContainer = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/users/:id" component={UserShow} />
                <Route
                    exact
                    path="/users/:id/events/:id"
                    component={EventShow}
                />
            </Switch>
        </div>
    );
};

export default UsersRouteContainer;
