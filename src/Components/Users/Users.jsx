import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

import "./Users.css";

function Users() {
  const [pageUsers, setPageUsers] = useState([]);
  const [numUsersPerPage, setNumUsersPerPage] = useState(8);
  const [pageNum, setPageNum] = useState(1);
  const [nationality, setNationality] = useState("");
  const [gender, setGender] = useState("");

  useEffect(() => {
    
    getPageUsers();
    // getUsersFilteredByNation('us')
  }, []);
  useEffect(() => {
    // getUsersFilteredByGender(gender)
  }, [gender]);

  async function getPageUsers() {
    let res = await axios.get(
      `https://randomuser.me/api?results=${numUsersPerPage}&page=${pageNum}`
    );
    if (res.status === 200) {
      setPageUsers(res.data.results);
      console.log(res.data.results);
    }
  }
  function handleChangeGender(e){
    setGender(e.target.value)
  }
  // async function getUsersFilteredByNation(national) {
  //   let res = await axios.get(
  //     `https://randomuser.me/api/?results=${numUsersPerPage}&nat=${national}`
  //   );
  //   if (res.status === 200) {
  //     setPageUsers(res.data.results);
  //     console.log(res.data.results);
  //   }
  // }

  // async function getUsersFilteredByGender(gender) {
  //   let res = await axios.get(`https://randomuser.me/api/?results=${numUsersPerPage}&page=${pageNum}&gender=${gender}`);
  //   if (res.status === 200) {
  //     setPageUsers(res.data.results);
  //     console.log(res.data.results, 'gender');
  //   }
  // }
  function getDate(dateStr){
    const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];
    var dateObj = new Date(dateStr);
    let newdate = monthNames[dateObj.getMonth()] + " " + dateObj.getUTCDate() + ", " + dateObj.getUTCFullYear();
    return newdate;
  }

  function getTime(dateStr){
    var dateObj = new Date(dateStr);
    return dateObj.toLocaleTimeString();
  }

  return (
    <div>
      <header className="d-flex">
        <p className="users-title">Users</p>
        <div className="user-info">
          <p className="user-info-name">Jones Ferdinand</p>
          <div className="user-info-img">
            <img className="user-img" src='./Images/user-img.png' width='44px' height='44px' alt="" />
          </div>
        </div>
      </header>

      <section className="all-tickets">
        <div className="d-flex">
          <p className="tickets-title">All Users</p>
          <div className="d-flex ms-auto">
            <FormControl sx={{ m: 2.5, minWidth: 197.12 }} size="small">
              <InputLabel id="demo-simple-select-label">Gender</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={gender}
                label="Gender"
                onChange={handleChangeGender}
              >
                <MenuItem value={'male'}>Male</MenuItem>
                <MenuItem value={'female'}>Female</MenuItem>
              </Select>
            </FormControl>

            {/* <FormControl sx={{ m: 1, minWidth: 197.12 }} size="small">
              <InputLabel id="demo-simple-select-label">Nationality</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={nationality}
                label="Nationality"
                onChange={handleChangeNational}
              >
                <MenuItem value={'male'}>Male</MenuItem>
                <MenuItem value={'female'}>Female</MenuItem>
              </Select>
            </FormControl> */}
            <input type="text" placeholder="Nationality" />
          </div>
        </div>

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
                    <span className="part-two">{getTime(user.registered.date)}</span>
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
      </section>
    </div>
  );
}

export default Users;
