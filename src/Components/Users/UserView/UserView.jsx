import axios from 'axios';
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import "./UserView.css";

function UserView() {
  const [user, setUser] =  useState({})
  let [idUser, setIdUser] =  useState('')
  let {id} = useParams()
  const navigate = useNavigate();
  async function getData(){
    let res = await axios.get(`https://randomuser.me/api`)
    if (res.status === 200) {
      setUser(res.data.results[0]);
    }
  }
  function returnToUser(){
    navigate('/users')
  }
  useEffect(()=>{
    getData()
    setIdUser(id.replace(':', ""))
  },[])
  return (
    <div className='userPopup'>
    <div className="userView">
      <div className="blueCover" onClick={returnToUser}></div>
      <div className="userCard">
        <img className="userCard-img" src={user?.picture?.large} alt="" />
        <p className="userCard-name">
          {user?.name?.first + " " + user?.name?.last}
        </p>
        <span className="userCard-address">
          {user?.location?.street.number +
            " " +
            user?.location?.street.name +
            " " +
            user?.location?.city +
            " " +
            user?.location?.state +
            user?.location?.postcode}
        </span>
      </div>
    </div>
    </div>
  );
}
export default UserView;