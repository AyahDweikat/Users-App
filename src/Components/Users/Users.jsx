import {
  Box,
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import NavigateNextRoundedIcon from "@mui/icons-material/NavigateNextRounded";
import NavigateBeforeRoundedIcon from "@mui/icons-material/NavigateBeforeRounded";
import Header from "../Header/Header";
import BasicTable from "./BasicTable";
import { getPageUsers } from "./ApiUtils";
import "./Users.css";

function Users() {
  const arrNumUsersPerPage = [
    8, 9, 10, 11, 12
  ];
  const [pageUsers, setPageUsers] = useState([]);
  const [numUsersPerPage, setNumUsersPerPage] = useState(8);
  const [pageNum, setPageNum] = useState(1);
  const [nationality, setNationality] = useState("");
  const [gender, setGender] = useState("");
  useEffect(() => {
    getData()
  }, [nationality, gender, pageNum, numUsersPerPage]);
  
  async function getData(){
    let res = await getPageUsers(nationality, gender, pageNum, numUsersPerPage);
    setPageUsers(res)
  }
  function handleChangeGender(e) {
    setGender(e.target.value);
    setNationality("");
  }
  function handleChangeNationality(e) {
    setNationality(e.target.value);
    setGender("");
  }
  function handlePageNum(process) {
    let _pageNum = pageNum;
    if (process === "plus") return setPageNum(++_pageNum);
    if (process === "minus" && _pageNum > 1) return setPageNum(--_pageNum);
    else if (_pageNum === 1) return;
  }
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
                <MenuItem height="20px" value={""}>Not defined</MenuItem>
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
        <Outlet />
        <div className="pagination">
          <div className="rows-per-page">
            <span>Rows per Page: </span>
          </div>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "45px" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="standard-select-currency"
              select
              label="Select"
              defaultValue={numUsersPerPage}
              onChange={(e)=> setNumUsersPerPage(e.target.value)}
              variant="standard"
              InputProps={{
                disableUnderline: true,
              }}
            >
              {arrNumUsersPerPage.map((option, idx) => (
                <MenuItem key={idx} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Box>
          <div className="navigation">
            <NavigateBeforeRoundedIcon
              className="navigateBtn"
              color={`${pageNum > 1 ? "#444547" : "disabled"}`}
              onClick={() => handlePageNum("minus")}
            />
            <NavigateNextRoundedIcon
              fontSize="medium"
              className="navigateBtn"
              onClick={() => handlePageNum("plus")}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
export default Users;