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
    getPageUsers()
    // getSecondPageUsers()
    // getUsersFilteredByNation('us')
    // getUsersFilteredByGender('male')
  }, []);

  async function getPageUsers() {
    let res = await axios.get(
      `https://randomuser.me/api?results=${numUsersPerPage}&page=${pageNum}`
    );
    if (res.status === 200) {
      setPageUsers(res.data.results);
      console.log(res.data.results);
    }
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
  //   let res = await axios.get(`https://randomuser.me/api/?gender=${gender}`);
  //   if (res.status === 200) {
  //     setPageUsers(res.data.results);
  //     console.log(res.data.results);
  //   }
  // }

  return (
    <div>
      <header className="d-flex">
        <p className="users-title">Users</p>
        <div className="user-info">
          <p className="user-info-name">Name</p>
          <div className="user-info-img">
            <img className="user-img" src="" alt="" />
          </div>
        </div>
      </header>
      <section className="all-tickets">
        <div className="d-flex">
          <p className="tickets-title">All Users</p>
          <div className="d-flex ms-auto">
            <input type="text" placeholder="Gender" />
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
            {pageUsers.map((user, idx)=>{
              return(
                <tr key={idx}>
                  <td className="d-flex flex-row">
                    <img className='thumbnail-img' src={user.picture.thumbnail} alt="" />
                    <div className="d-flex flex-column">
                      <p className="part-one">{user.name.first + " " + user.name.last}</p>
                      <span className="part-two">{user.location.street.number + " " + user.location.street.name + " " + user.location.city + " " + user.location.state + user.location.postcode}</span>
                    </div>
                  </td>
                  <td>
                    <p className="part-one">{user.email}</p>
                    <span className="part-two">{user.phone}</span>
                  </td>
                  <td>
                    <p className="part-one">{user.registered.date}</p>
                    <span className="part-two">{user.registered.date}</span>
                  </td>
                  <td>
                    <p className="part-one">{user.location.country}</p>
                    <span className="part-two">{user.location.postcode}</span>
                  </td>
                </tr>
              )
            })}
          </table>
        </div>
      </section>
    </div>
  );
}

export default Users;
