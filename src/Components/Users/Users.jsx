import { FormControl, Input, InputLabel, MenuItem, Select } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import BasicTable from "./BasicTable";
// import TablePaginationDemo from "./TablePaginationDemo";

import "./Users.css";

function Users() {
  const [pageUsers, setPageUsers] = useState([]);
  const [numUsersPerPage, setNumUsersPerPage] = useState(8);
  const [pageNum, setPageNum] = useState(1);
  const [nationality, setNationality] = useState("");
  const [gender, setGender] = useState("");

  useEffect(() => {
    getPageUsers();
  }, []);

  // useEffect(() => {
    // getUsersFilteredByGender(gender)
    // console.log(gender)
  // }, [gender]);

  async function getPageUsers() {
    let res = await axios.get(
      `https://randomuser.me/api?results=${numUsersPerPage}&page=${pageNum}`
    );
    if (res.status === 200) {
      setPageUsers(res.data.results);
      // console.log(res.data.results);
    }
  }
  function handleChangeGender(e) {
    setGender(e.target.value);
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

  return (
    <div className="users">
      <Header />
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
                <MenuItem height="20px" value={""} >Not defined</MenuItem>
                <MenuItem value={"male"}>Male</MenuItem>
                <MenuItem value={"female"}>Female</MenuItem>
              </Select>
            </FormControl>
            <Input type="text" placeholder="Nationality" variant="plain" className="inputNat" />
          </div>
        </div>
        <BasicTable  pageUsers={pageUsers} />
        <div>{/* <TablePaginationDemo/> */}</div>
      </section>
    </div>
  );
}

export default Users;
