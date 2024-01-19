import React from "react";
import "./follower.scss";
import Avatar from "../avatar/Avatar";

const Follower = () => {
  return (
    <div className="follower">
      <div className="user-info">
        <Avatar />
        <h4 className="name">John</h4>
      </div>
      <h5 className="hover-link follow-link">Follow</h5>
    </div>
  );
};

export default Follower;
