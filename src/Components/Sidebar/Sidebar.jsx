// import { Button } from '@mui/material';
import React from 'react';
// import { Link } from 'react-router-dom';
import { sidebarList } from './sidebarList-utils';


import './Sidebar.css';

// import logo from './Images/logo-white-small.png';

function Sidebar() {
  // function printing(){
  //   console.log("hello world")
  // }
  return (
    <div className='sidebar'>
        <div>
            <img className='logo-img' src={`./Images/logo-white-small.png`} alt="logo for userpilot" />
        </div>
        <div>
          <ul>
            {sidebarList.map((item, idx)=>{
              return (
                <div className='sidebarList' key={idx}>
                  <li style={{color: `${item.active? '#DDE2FF':'#A4A6B3'}`}} className={`${item.active? 'activeLi' :''}`}>
                    {/* <Link to={item.link}> */}
                      <img className='sidebar-list-icon' src={item.icon} alt="" />
                      <p>{item.name}</p>
                    {/* </Link> */}
                  </li>
                </div>
              )
            })}
          </ul>
        </div>
    </div>
  )
}

export default Sidebar