import React from "react";
import { useState } from "react";

import imga from "./profile.png";
import { Navbar, Nav, NavItem, Dropdown } from "react-bootstrap";
import Notification from "./notificarion";
import { history } from 'js/helpers/history';

export const Header = (props) => {
  const sidemenuToggle = () => {
    document.getElementById("sidebarNav").classList.toggle("open");
  };
  const [buttonstate, setButton] = useState(false);
  const handleClick = () => {
    return setButton(!buttonstate);
  };
  return (
    <Navbar color="white" light expand="lg" className="admin-navbar-head">
      <div className=" hide-lg">
        <div className="header_top_icons_container">
          <ul className="header_top_icons">
            <li className="header_menu bell" onClick={handleClick}>
              <svg
                className="MuiSvgIcon-root"
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                  <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                </svg>
              </svg>
              <Notification buttonstate={buttonstate} />
            </li>

            <li className=" MuiAvatar-circle header_menu profile_pic  ">
              <img alt="User" src={'/images/sidebar/profile.jpeg'} className="MuiAvatar-img" />{" "}
            </li>
            <li className="header_menu storename  "> STORE NAME </li>
            <li>
              <Dropdown>
                <Dropdown.Toggle className="header_down_arrow header_menu">
                  {/* <li >  <svg class="MuiSvgIcon_root_3" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path></svg> </li> */}
                </Dropdown.Toggle>
                <Dropdown.Menu alignRight>
                  <Dropdown.Item
                    onClick={() => history.push('/admin/account-settings')}
                    className="navigation-drop-link"
                  >
                    Account setting
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-2"
                    className="navigation-drop-link"
                  >
                    Logout
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
          </ul>
        </div>
      </div>
      <Nav>
        <NavItem>
          <Navbar.Toggle
            className="ml-2"
            data-toggle="offcanvas"
            data-target="#sidebarNav"
            onClick={sidemenuToggle}
          />
        </NavItem>
      </Nav>

      {/* <Navbar.Collapse navbar className="main-header">
                <Nav className="ml-auto main-header-right" navbar>
                    <NavItem>
                        <p>Powered By Toolx</p>
                    </NavItem>
                </Nav>
            </Navbar.Collapse> */}
    </Navbar>
  );
};
