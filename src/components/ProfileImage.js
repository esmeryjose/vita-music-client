import React from "react";
import rockOn from "../assets/rockOn.jpg";

const ProfileImage = ({ user }) => {
    let imgUrl = user.profile_img_url;
    if (!imgUrl) {
        imgUrl = rockOn;
    }
    return (
        <div className="profile-img-show-page ">
            <img
                className="profile-img"
                src={imgUrl}
                width="80%"
                height="80%"
                alt="spotifyImgUrl"
            />
        </div>
    );
};

export default ProfileImage;
