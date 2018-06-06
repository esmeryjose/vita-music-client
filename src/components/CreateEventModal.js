import React, { Component } from "react";
import { connect } from "react-redux";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import TextField from "material-ui/TextField";
import DatePicker from "material-ui/DatePicker";
import TimePicker from "material-ui/TimePicker";
import { TimeParser } from "../deliverables/Helpers";
import {
    createEvent,
    openCreateEventModal,
    closeCreateEventModal
} from "../actions/EventsActions";

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
        form: {
            title: "",
            location: "",
            description: "",
            event_date: "",
            starting_time: "",
            ending_time: ""
        }
    };

    handleClose = e => {
        if (!e || e.target.innerText === "CANCEL") {
            this.props.closeCreateEventModal();
        } else {
            // this.setState({ open: false }, this.createEvent);
            this.props.closeCreateEventModal();
            this.createEvent();
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
        console.log("inside render", this.props.eventModal);

        return (
            <div>
                <Dialog
                    title="Create Event"
                    actions={this.renderButtonActions()}
                    modal={false}
                    open={this.props.eventModal}
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

const mapStateToProps = ({ auth, users, events }) => {
    const id = auth.currentUser.id;
    const { user } = users;
    const eventModal = events.createEventModal;
    return { currentUserId: id, user, eventModal };
};

export default connect(
    mapStateToProps,
    {
        createEvent,
        openCreateEventModal,
        closeCreateEventModal
    }
)(CreateEventModal);
