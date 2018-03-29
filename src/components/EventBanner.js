import React from "react";
import EventDetail from "../components/EventDetail";
import Avatar from "material-ui/Avatar";
import { connect } from "react-redux";
import RaisedButton from "material-ui/RaisedButton";
import { Link } from "react-router-dom";
import Check from "material-ui/svg-icons/action/done";
import Date from "material-ui/svg-icons/action/date-range";
import Location from "material-ui/svg-icons/communication/location-on";
import Time from "material-ui/svg-icons/av/av-timer";
import { blue50 } from "material-ui/styles/colors";
import { IsEmpty } from "../deliverables/Helpers";
import { createRsvp } from "../actions/RsvpActions";
import rockOn from "../assets/rockOn.jpg";

const EventBanner = ({ event, currentUser, createRsvp }) => {
    if (!IsEmpty(event)) {
        return (
            <Banner
                event={event}
                currentUser={currentUser}
                createRsvp={createRsvp}
            />
        );
    }

    return null;
};

const renderRsvpButton = (event, currentUser, createRsvp) => {
    const handleClick = () => createRsvp(currentUser.id, event.id);

    if (!IsEmpty(currentUser)) {
        if (
            !event.pending.find(attendee => attendee.id === currentUser.id) &&
            event.user_id !== currentUser.id
        ) {
            const numAttending = event.attendees.length;
            return (
                <div className="container-rsvp-button">
                    <div className="center">
                        <div className="center width-50">
                            Reserve Your Spot! {numAttending} guest are going!
                        </div>
                        <br />
                        <div className="center width-20">
                            <RaisedButton
                                onClick={handleClick}
                                label={<Check color={blue50} />}
                                style={{ margin: 5 }}
                                backgroundColor={"#6bc023"}
                            />
                        </div>
                    </div>
                </div>
            );
        }
    }
    return null;
};

const Banner = ({ event, currentUser, createRsvp }) => {
    const { admin } = event;
    const date = event.event_date.split("00:00:00")[0];
    let imgUrl = admin.profile_img_url;
    if (!imgUrl) {
        imgUrl = rockOn;
    }

    return (
        <div className="banner">
            <div className="host-container">
                <div className="host-first-child-left">
                    <div className="avatar-event-show">
                        <Link to={`/users/${admin.id}`}>
                            <Avatar
                                style={{ margin: 5 }}
                                size={60}
                                src={imgUrl}
                            />
                        </Link>
                    </div>
                    <div className="event-host-by-container">
                        <h3 className="event-title">{event.title}</h3>
                        <div className="hosted-by">
                            Hosted by: {admin.display_name}
                        </div>
                    </div>
                </div>
                <div className="host-first-child-right">
                    <div className="host-second-child">
                        <div className="container-date-time-location">
                            <p className="date-time-location">
                                <Date style={{ height: 30, width: 30 }} />
                                {date}
                            </p>
                            <p className="date-time-location">
                                <Location style={{ height: 30, width: 30 }} />
                                {event.location}
                            </p>
                            <p className="date-time-location">
                                <Time style={{ height: 30, width: 30 }} />
                                {`${event.starting_time} to ${
                                    event.ending_time
                                }`}
                            </p>
                        </div>

                        {renderRsvpButton(event, currentUser, createRsvp)}
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = ({ events, auth }) => {
    const { event } = events;
    const { currentUser } = auth;
    return { event, currentUser };
};

export default connect(mapStateToProps, { createRsvp })(EventBanner);
