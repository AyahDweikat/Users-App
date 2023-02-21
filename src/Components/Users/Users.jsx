import {
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
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
    // getPageUsers();
  }, []);

  // useEffect(() => {
  //   if(!gender){
  //     return;
  //   }
  // getUsersFilteredByGender(gender)
  // }, [gender]);

  // useEffect(()=>{
  //   if(!nationality){
  //     return;
  //   }

  //   getUsersFilteredByNation(nationality);
  // },[nationality])

  function handleChangeGender(e) {
    setGender(e.target.value);
    setNationality("")
  }
  function handleChangeNationality(e) {
    setNationality(e.target.value);
    setGender("")
  }



  // async function getPageUsers() {
  //   let res = await axios.get(
  //     `https://randomuser.me/api?results=${numUsersPerPage}&page=${pageNum}`
  //   );
  //   if (res.status === 200) {
  //     setPageUsers(res.data.results);
  //     console.log("1")
  //   }
  // }
  
  // async function getUsersFilteredByNation(nationality) {
  //   if(!nationality){
  //     getPageUsers();
  //   }
  //   // if(!nationality) return getUsersFilteredByGender(gender);
  //   let res = await axios.get(
  //     `https://randomuser.me/api/?results=${numUsersPerPage}&nat=${nationality}`
  //   );
  //   if (res.status === 200) {
  //     setPageUsers(res.data.results);
  //     console.log("2")
  //   }
  // }

  // async function getUsersFilteredByGender(gender) {
  //   if(!gender){
  //     return getPageUsers();
  //   } 
  //   // if(!gender) return getUsersFilteredByNation(nationality);
  //   let res = await axios.get(`https://randomuser.me/api/?results=${numUsersPerPage}&page=${pageNum}&gender=${gender}`);
  //   if (res.status === 200) {
  //     setPageUsers(res.data.results);
  //     console.log("3")

  //     // console.log(res.data.results, 'gender');
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
                <MenuItem height="20px" value={""}>
                  Not defined
                </MenuItem>
                <MenuItem value={"male"}>Male</MenuItem>
                <MenuItem value={"female"}>Female</MenuItem>
              </Select>
            </FormControl>
            <Input
              type="text"
              placeholder="Nationality"
              variant="plain"
              className="inputNat"
              value={nationality}
              onChange={handleChangeNationality}
            />
          </div>
        </div>
        <BasicTable pageUsers={pageUsers} />
        <div>{/* <TablePaginationDemo/> */}</div>
      </section>
    </div>
  );
}

export default Users;
