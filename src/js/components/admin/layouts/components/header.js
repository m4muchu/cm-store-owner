import React from 'react';
import { Link } from "react-router-dom";
import {
    Navbar,
    Nav,
    NavItem,
} from 'react-bootstrap';

export const Header = () => {

    const sidemenuToggle = () => {
        document.getElementById("sidebarNav").classList.toggle("open");
    }

    return (
        <Navbar color="white" light expand="lg" className="admin-navbar-head">
            <div className="d-flex ml-auto hide-lg">
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
                <p>test
                    
                </p>
            </div>
            {/* <Navbar.Collapse navbar className="main-header">
                <Nav className="ml-auto main-header-right" navbar>
                    <NavItem>
                        <p>Powered By Toolx</p>
                    </NavItem>
                </Nav>
            </Navbar.Collapse> */}
        </Navbar>
    );
}