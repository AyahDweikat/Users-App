import { TableBody, TableCell, TableRow } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function TableBodyTag({ pageUsers }) {
  function getDate(dateStr) {
    const monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December",
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
    <TableBody>
      {pageUsers.map((user, idx) => (
        <React.Fragment key={idx}>
          <TableRow
            className="tableRow"
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell className="tableCell" component="th" scope="row">
              <Link
                to={`:${user.id.value}`}
                className="d-flex flex-row tableCell"
              >
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
              </Link>
            </TableCell>
            <TableCell className="tableCell" align="right">
              <Link to={`userview`} className="tableCell">
                <p className="part-one">{user.email}</p>
                <span className="part-two">{user.phone}</span>
              </Link>
            </TableCell>
            <TableCell className="tableCell" align="right">
              <Link to={`userview`} className="tableCell">
                <p className="part-one">{getDate(user.registered.date)}</p>
                <span className="part-two">
                  {getTime(user.registered.date)}
                </span>
              </Link>
            </TableCell>
            <TableCell className="tableCell" align="right">
              <Link to={`userview`} className="tableCell">
                <p className="part-one">{user.location.country}</p>
                <span className="part-two">{user.location.postcode}</span>
              </Link>
            </TableCell>
          </TableRow>
        </React.Fragment>
      ))}
    </TableBody>
  );
}
export default TableBodyTag;
