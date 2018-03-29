import React, { Component } from "react";
import { connect } from "react-redux";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import DatePicker from "material-ui/DatePicker";
import TimePicker from "material-ui/TimePicker";
import { TimeParser } from "../deliverables/Helpers";
import { createEvent } from "../actions/EventsActions";
import { IsEmpty } from "../deliverables/Helpers";
import { NavLink } from "react-router-dom";

const styles = {
    floatingLabelFocusStyle: {
        color: "#6bc023"
    },
    underlineFocusStyle: {
        borderColor: "#6bc023"
    }
};

class CreateEventModal extends Component {
    state = {
        open: false,
        form: {
            title: "",
            location: "",
            description: "",
            event_date: "",
            starting_time: "",
            ending_time: ""
        }
    };

    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = e => {
        if (!e || e.target.innerText === "CANCEL") {
            this.setState({ open: false });
        } else {
            this.setState({ open: false }, this.createEvent);
        }
    };

    createEvent = () => {
        console.log(this.props.currentUserId);
        const { form } = this.state;
        const { currentUserId } = this.props;
        this.props.createEvent(currentUserId, form);
    };

    handleDate = (x, val) => {
        const event_date = val.toString();

        this.setState(pState => ({
            ...pState,
            form: { ...pState.form, event_date }
        }));
    };

    handleStartingTime = (x, val) => {
        const starting_time = TimeParser(val);

        this.setState(pState => ({
            ...pState,
            form: { ...pState.form, starting_time }
        }));
    };

    handleEndingTime = (x, val) => {
        const ending_time = TimeParser(val);

        this.setState(pState => ({
            ...pState,
            form: { ...pState.form, ending_time }
        }));
    };

    handleChange = e => {
        const { value } = e.target;
        const { type } = e.target.dataset;

        this.setState(pState => ({
            ...pState,
            form: { ...pState.form, [type]: value }
        }));
    };

    renderCreateButton = () => {
        const { currentUserId, user } = this.props;
        if (currentUserId && !IsEmpty(user)) {
            if (currentUserId === user.id) {
                return (
                    <div className="create-event-button">
                        <FlatButton
                            label="Create Event"
                            onClick={this.handleOpen}
                        />|
                        <NavLink to="/search">
                            <FlatButton
                                label="Search"
                                onClick={this.handleOpen}
                            />
                        </NavLink>
                    </div>
                );
            }
        }
        return null;
    };

    renderButtonActions = () => {
        const actions = [
            <FlatButton
                label="Cancel"
                backgroundColor={"#6bc023"}
                onClick={this.handleClose}
            />,
            <FlatButton
                label="Submit"
                backgroundColor={"#6bc023"}
                keyboardFocused={true}
                onClick={this.handleClose}
            />
        ];
        return actions;
    };
    render() {
        return (
            <div>
                {this.renderCreateButton()}
                <Dialog
                    title="Dialog With Actions"
                    actions={this.renderButtonActions()}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                >
                    <TextField
                        data-type="title"
                        hintText=""
                        floatingLabelText="Title"
                        onChange={this.handleChange}
                        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                        underlineFocusStyle={styles.underlineFocusStyle}
                    />
                    <br />
                    <TextField
                        data-type="location"
                        hintText=""
                        floatingLabelText="Location"
                        onChange={this.handleChange}
                        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                        underlineFocusStyle={styles.underlineFocusStyle}
                    />
                    <br />
                    <TextField
                        data-type="description"
                        hintText="Event Detail"
                        multiLine={true}
                        rows={2}
                        rowsMax={4}
                        onChange={this.handleChange}
                        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                        underlineFocusStyle={styles.underlineFocusStyle}
                    />
                    <DatePicker
                        hintText="Date"
                        mode="landscape"
                        onChange={this.handleDate}
                    />
                    <TimePicker
                        onChange={this.handleStartingTime}
                        hintText="Starting time..."
                        autoOk={true}
                        style={{ selectColor: "#6bc023" }}
                    />
                    <TimePicker
                        onChange={this.handleEndingTime}
                        hintText="Ending time..."
                        autoOk={true}
                    />
                </Dialog>
            </div>
        );
    }
}

const mapStateToProps = ({ auth, users }) => {
    const id = auth.currentUser.id;
    const { user } = users;
    return { currentUserId: id, user };
};

export default connect(mapStateToProps, { createEvent })(CreateEventModal);
