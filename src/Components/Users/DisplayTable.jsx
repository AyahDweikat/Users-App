import React from "react";

function DisplayTable({ pageUsers }) {
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
        <tr className="headingTable">
          <th>User</th>
          <th>Contact Information</th>
          <th>Registration Date</th>
          <th>Country/Post Code</th>
        </tr>
        {pageUsers.map((user, idx) => {
          return (
            <tr key={idx}>
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
          );
        })}
      </table>
    </div>
  );
}

export default DisplayTable;
