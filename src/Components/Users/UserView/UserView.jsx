import React from "react";

function UserView({user}) {
  return (
    <div>
      <img src={user?.picture?.large} alt="" />
      <div className="d-flex flex-column justify-content-center">
        <p className="part-one">{user?.name?.first + " " + user?.name?.last}</p>
        <span className="part-two">
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
