// import React from "react";
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import UserView from "./UserView/UserView";

function DisplayTable({ pageUsers }) {
  const [userObj, setUserObj] = React.useState({});
  // const [state, setState] = React.useState(false);
  const [state, setState] = React.useState({
    right: false,
  });
  const toggleDrawer = (anchor, user, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setUserObj(user);
    // setState(open);
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 545 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <UserView user={userObj} />
    </Box>
  );

  function getDate(dateStr) {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    var dateObj = new Date(dateStr);
    let newdate =
      monthNames[dateObj.getMonth()] +
      " " +
      dateObj.getUTCDate() +
      ", " +
      dateObj.getUTCFullYear();
    return newdate;
  }

  function getTime(dateStr) {
    var dateObj = new Date(dateStr);
    return dateObj.toLocaleTimeString();
  }

  return (
    <div>
      <table>
        <thead>
          <tr className="headingTable">
            <th>User</th>
            <th>Contact Information</th>
            <th>Registration Date</th>
            <th>Country/Post Code</th>
          </tr>
        </thead>
        <tbody>
          {pageUsers.map((user, idx) => {
            return (
              <React.Fragment key={idx}>
                <tr 
                // onClick={toggleDrawer(user, true)}
                onClick={toggleDrawer("right", user, true)}>
                  <td className="d-flex flex-row">
                    <img
                      className="thumbnail-img"
                      src={user.picture.thumbnail}
                      alt=""
                    />
                    <div className="d-flex flex-column justify-content-center">
                      <p className="part-one">
                        {user.name.first + " " + user.name.last}
                      </p>
                      <span className="part-two">
                        {user.location.street.number +
                          " " +
                          user.location.street.name +
                          " " +
                          user.location.city +
                          " " +
                          user.location.state +
                          user.location.postcode}
                      </span>
                    </div>
                  </td>
                  <td>
                    <p className="part-one">{user.email}</p>
                    <span className="part-two">{user.phone}</span>
                  </td>
                  <td>
                    <p className="part-one">{getDate(user.registered.date)}</p>
                    <span className="part-two">
                      {getTime(user.registered.date)}
                    </span>
                  </td>
                  <td>
                    <p className="part-one">{user.location.country}</p>
                    <span className="part-two">{user.location.postcode}</span>
                  </td>
                </tr>

                <Drawer
                  anchor={"right"}
                  open={state["right"]}
                  onClose={toggleDrawer("right", false)}
                >
                  {list("right")}
                </Drawer>
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default DisplayTable;
