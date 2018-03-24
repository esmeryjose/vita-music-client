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

const EventBanner = ({ event }) => {
    const { admin } = event;
    const numAttending = event.attendees.length;
    // <EventDetail />
    return (
        <div className="banner">
            <div className="host-container">
                <div className="host-first-child-left">
                    <div>
                        <div className="next-to-event-avatar">
                            <h3 className="event-title">
                                Spring Day Festivities
                            </h3>
                            <div className="hosted-by">
                                Hosted by: {admin.display_name}
                            </div>
                        </div>
                        <div className="avatar-event-show">
                            <Link to={`/users/${admin.id}`}>
                                <Avatar
                                    style={{ margin: 5 }}
                                    size={60}
                                    src={admin.profile_img_url}
                                />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="host-first-child-right">
                    <div className="host-second-child">
                        <div className="container-date-time-location">
                            <p className="date-time-location">
                                <Date style={{ height: 30, width: 30 }} />
                                Saturday, March 24, 2018
                            </p>
                            <p className="date-time-location">
                                <Location style={{ height: 30, width: 30 }} />
                                11 broadway apt#2, new york, new york 10468
                            </p>
                            <p className="date-time-location">
                                <Time style={{ height: 30, width: 30 }} />
                                3:00 PM to 7:00 PM
                            </p>
                        </div>

                        <div className="container-rsvp-button">
                            <div className="center">
                                <div className="center width-50">
                                    Reserve Your Spot! {numAttending} guest are
                                    going!
                                </div>
                                <br />
                                <div className="center width-20">
                                    <RaisedButton
                                        label={<Check color={blue50} />}
                                        primary={true}
                                        style={{ margin: 5 }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = ({ events }) => {
    const { event } = events;
    return { event };
};

export default connect(mapStateToProps, {})(EventBanner);
