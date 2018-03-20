import { loginUser } from "../actions/AuthActions";
import { startLoader } from "../actions/LoaderActions";
import { connect } from "react-redux";

let code;

const Callback = ({ history, location, loginUser, startLoader }) => {
    if (!localStorage.getItem("token") && !code) {
        console.log("inside callback");
        // debugger;
        code = location.search.split("?code=")[1];
        startLoader();
        loginUser(code, history);
    }
    return null;
};

const mapStateToProps = () => ({});

export default connect(mapStateToProps, { loginUser, startLoader })(Callback);
