import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import DisplayTable from "./DisplayTable";
import TablePaginationDemo from "./TablePaginationDemo";


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

  useEffect(() => {
    // getUsersFilteredByGender(gender)
  }, [gender]);

  async function getPageUsers() {
    let res = await axios.get(
      `https://randomuser.me/api?results=${numUsersPerPage}&page=${pageNum}`
    );
    if (res.status === 200) {
      setPageUsers(res.data.results);
      // console.log(res.data.results);
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
  
  return (
    <div>
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
            <input type="text" placeholder="Nationality" />
          </div>
        </div>
        <DisplayTable pageUsers={pageUsers} />
        <div>
          {/* <TablePaginationDemo/> */}
        </div>
      </section>
    </div>
  );
}

export default Users;
