import React from 'react';
import { sidebarList } from './sidebarList-utils';
import { Link } from 'react-router-dom';
import logo from '../../Images/logo-white-small.png';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className='sidebar'>
        <div>
            <img className='logo-img' 
            src={logo}
            alt="logo for userpilot" />
        </div>
        <div>
          <ul>
            {sidebarList.map((item, idx)=>{
              return (
                <div className='sidebarList' key={idx}>
                  <li  className={`${item.active? 'activeLi' :''}`}>
                    <Link style={{color: `${item.active? '#DDE2FF':'#A4A6B3'}`}} to={item.link}
                    onClick = {item.active? '' :(event) => event.preventDefault()}
                    >
                      <img className='sidebar-list-icon' src={item.icon} alt="" />
                      <p>{item.name}</p>
                    </Link>
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