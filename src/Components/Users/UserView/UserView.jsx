import React from "react";
import "./UserView.css";

function UserView({ user }) {
  return (
    <div className="userView">
      <div className="blueCover"></div>
      <div className="userCard">
        <img className="userCard-img" src={user?.picture?.large} alt="" />
        <p className="userCard-name">
          {user?.name?.first + " " + user?.name?.last}
        </p>
        <span className="userCard-address">
          {user?.location?.street.number +
            " " +
            user?.location?.street.name +
            " " +
            user?.location?.city +
            " " +
            user?.location?.state +
            user?.location?.postcode}
        </span>
      </div>
    </div>
  );
}

export default UserView;
