import { loginUser } from "../actions/AuthActions";
import { connect } from "react-redux";

const Callback = ({ history, location, loginUser }) => {
    if (!localStorage.getItem("token")) {
        const code = location.search.split("?code=")[1];
        loginUser(code, history);
    }
    return null;
};

const mapStateToProps = () => ({});

export default connect(mapStateToProps, { loginUser })(Callback);
