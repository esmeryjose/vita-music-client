import React from "react";
import ReactDOM from "react-dom";
import App from "./container/App";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter as Router, withRouter } from "react-router-dom";
import store from "./store";

const MyApp = () => (
    <Provider store={store()}>
        <MuiThemeProvider>
            <Router>
                <App />
            </Router>
        </MuiThemeProvider>
    </Provider>
);

ReactDOM.render(<MyApp />, document.getElementById("root"));
registerServiceWorker();
