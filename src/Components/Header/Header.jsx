import React from "react";
import './Header.css'
function Header() {
  return (
    <header className="d-flex">
      <p className="users-title">Users</p>
      <div className="user-info">
        <p className="user-info-name">Jones Ferdinand</p>
        <div className="user-info-img">
          <img
            className="user-img"
            src="./Images/user-img.png"
            width="44px"
            height="44px"
            alt=""
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
