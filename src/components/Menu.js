import React, { useState } from "react";

import { Link } from "react-router-dom";

const Menu = () => {
  const [selectedMenu, setSelectMenu] = useState(0);
  const[isProfileDropdown, setIsProfileDropdown] =useState(false);


  const handelMenuClick = (index) =>{
    setSelectMenu(index);
  }

  const handeProfilelClick = (index) =>{
    setIsProfileDropdown(!isProfileDropdown);
   }
 
   const menuClass ="menu";
   const activeMenuClass = "menu selected"

  return (
    <div className="menu-container">
      <img src="logo.png" alt="logo" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link style={{textDecoration:"none"}} to="/" onClick= {()=> handelMenuClick(0)}>
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                Dashboard
              </p>
              </Link>
          </li>
          <li>
          <Link style={{textDecoration:"none"}} to="/orders" onClick= {()=> handelMenuClick(1)}>
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                Orders
              </p>
              </Link>
          </li>
          <li>
           
          <Link style={{textDecoration:"none"}} to="/holdings" onClick= {()=> handelMenuClick(2)}>
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
                Holdings
              </p>
              </Link>
            
          </li>
          <li>
          <Link style={{textDecoration:"none"}} to="/positions" onClick= {()=> handelMenuClick(3)}>
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                Positions
              </p>
              </Link>
          </li>
          <li>
          <Link style={{textDecoration:"none"}} to="/funds" onClick= {()=> handelMenuClick(4)}>
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
              Funds
              </p>
              </Link>
          </li>
          <li>
          <Link style={{textDecoration:"none"}} to="/apps" onClick= {()=> handelMenuClick(5)}>
              <p className={selectedMenu === 5 ? activeMenuClass : menuClass}>
                Apps
              </p>
              </Link>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handeProfilelClick}>
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
