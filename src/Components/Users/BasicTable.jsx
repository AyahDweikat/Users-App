import {
  Box,
  Drawer,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import * as React from "react";
import { Link } from "react-router-dom";
import UserView from "./UserView/UserView";

export default function BasicTable({ pageUsers }) {
  const [userObj, setUserObj] = React.useState({});
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
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow className="headingTable">
            <TableCell className="tableHeadCell">User</TableCell>
            <TableCell className="tableHeadCell" align="right">
              Contact Information
            </TableCell>
            <TableCell className="tableHeadCell" align="right">
              Registration Date
            </TableCell>
            <TableCell className="tableHeadCell" align="right">
              Country/Post Code
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pageUsers.map((user, idx) => (
            <React.Fragment key={idx}>
              <TableRow
                className="tableRow"
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell className="tableCell" component="th" scope="row">
                  <Link
                    to={`/:${user.id.value}`}
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
                  <Link to={`/:${user.id.value}`} className="tableCell">
                    <p className="part-one">{user.email}</p>
                    <span className="part-two">{user.phone}</span>
                  </Link>
                </TableCell>
                <TableCell className="tableCell" align="right">
                  <Link to={`/:${user.id.value}`} className="tableCell">
                    <p className="part-one">{getDate(user.registered.date)}</p>
                    <span className="part-two">
                      {getTime(user.registered.date)}
                    </span>
                  </Link>
                </TableCell>
                <TableCell className="tableCell" align="right">
                  <Link to={`/:${user.id.value}`} className="tableCell">
                    <p className="part-one">{user.location.country}</p>
                    <span className="part-two">{user.location.postcode}</span>
                  </Link>
                </TableCell>
              </TableRow>
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

{
  /* <Drawer
variant="persistent"
anchor={"right"}
open={state["right"]}
onClose={toggleDrawer("right", false)}
>
{list("right")}
</Drawer> */
}
