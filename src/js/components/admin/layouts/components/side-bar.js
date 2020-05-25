import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import { useState } from 'react';
import { useContext } from 'react';
import { AuthProvider } from 'js/contexts';
import Dropdown from 'react-bootstrap/Dropdown';

export const Sidebar = () => {
    const [state, menuToggle] = useState({
        static_content_collapse: false,
        reports_collapse: false,
        membership_plan_collapse: false,

    })
    const [order, setOrder] = useState(false);
    const handleClick = () => {
        return setOrder(!order);
    };
    const [catalog, setCatalog] = useState(false);
    const handleClickCatalog = () => {
        return setCatalog(!catalog);
    };
    const [discount, setDiscount] = useState(false);
    const handleClickDiscount = () => {
        return setDiscount(!discount);
    };
    
    const { auth } = useContext(AuthProvider)
    const secondLevelMenuToggle = (key) => {
        menuToggle({ ...state, [key]: !state[key] })
    }


    const toogleNavBar = () => {
        document.getElementById("sidebarNav").classList.toggle("open");
    }



    return (
        <div className="global-sidebar offcanvas-collapse" id="sidebarNav">
            <aside className="sidebar-wrapper sidebar-collapse shadow" >
                <div className="sidebar__list--logo">
                    <img src="/images/admin/global/logo.svg" className="sidebar__portal-logo" width="131px" alt="" />
                </div>
                <ul className="admin-sidebar text-left">

                    <li className="sidebar__list">
                        <NavLink to='/admin/dashboard' className="sidebar__list--text" activeClassName="active">


                            <div class="sidenav">
                                <button  className="dropdown-btn">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        width="20" height="20" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round"
                                        class="jss525"><path d="M21.21 15.89A10 10 0 1 1 8 2.83">
                                        </path><path d="M22 12A10 10 0 0 0 12 2v10z"></path>
                                    </svg>
                                    <span>Home</span>
                                </button>
                            </div>
                        </NavLink>
                    </li>

                    <li className="sidebar__list">
                        <NavLink to='/admin/trip-management' className="sidebar__list--text">


                            <div class="sidenav">
                                <button onClick={handleClickCatalog} className="dropdown-btn">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="jss266"
                                    >
                                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                        <circle cx="9" cy="7" r="4" />
                                        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                    </svg>
                                    <span>Catalog</span>
                                    <svg
                                        class="MuiSvgIcon-root"
                                        focusable="false"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                    >
                                        <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
                                    </svg>

                                    <div className={catalog ? "allStyle" : "noneStyle"}>
                                        <a href="/">Product</a>
                                        <a href="/">Category</a>
                                        <a href="/">Collection</a>
                                    </div>
                                </button>

                            </div>
                        </NavLink>
                    </li>
                    <li className="sidebar__list">
                        <NavLink to='/admin/user-management' className="sidebar__list--text">
                            <div class="sidenav">
                                <button onClick={handleClick} className="dropdown-btn">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20" height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round"
                                        class="jss525">
                                        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                                    </svg>
                                    <span>Orders</span>
                                    <svg
                                        class="MuiSvgIcon-root"
                                        focusable="false"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                    >
                                        <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
                                    </svg>
                                    <div className={order ? "allStyle" : "noneStyle"}>
                                        <a href="/">Orders</a>
                                        <a href="/">Drafts</a>
                                    </div>
                                </button>

                            </div>
                        </NavLink>
                    </li>
                    <li className="sidebar__list">
                        <NavLink to='/admin/leads' onClick={toogleNavBar} className="sidebar__list--text">
                            <div class="sidenav">
                                <button  className="dropdown-btn">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="jss266"
                                    >
                                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                        <circle cx="9" cy="7" r="4" />
                                        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                    </svg>
                                    <span>Customers</span>
                                </button>
                            </div>
                        </NavLink>
                    </li>
                    <li className="sidebar__list">
                        <NavLink to='/admin/user-management' className="sidebar__list--text">
                            <div class="sidenav">
                                <button onClick={handleClickDiscount} className="dropdown-btn">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="jss266"
                                    >
                                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                        <circle cx="9" cy="7" r="4" />
                                        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                    </svg>
                                    <span>Discounts</span>
                                    <svg
                                        class="MuiSvgIcon-root"
                                        focusable="false"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                    >
                                        <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
                                    </svg>

                                    <div className={discount ? "allStyle" : "noneStyle"}>
                                        <a href="/">Sales</a>
                                        <a href="/">Vouchers</a>
                                    </div>
                                </button>

                            </div>
                        </NavLink>
                    </li>
                    <li className="sidebar__list">
                        <NavLink to='/admin/exchanges' onClick={toogleNavBar} className="sidebar__list--text" >
                            <div class="sidenav">
                                <button  className="dropdown-btn">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="jss266"
                                    >
                                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                        <circle cx="9" cy="7" r="4" />
                                        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                    </svg>
                                    <span>Translations</span>
                                </button>
                            </div>
                        </NavLink>
                    </li>
                    <li className="sidebar__list">
                        <NavLink to='/admin/advertising' className="sidebar__list--text" >
                            <div class="sidenav">
                                <button onClick={handleClick} className="dropdown-btn">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="jss266"
                                    >
                                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                        <circle cx="9" cy="7" r="4" />
                                        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                    </svg>
                                    <span>Configuration</span>
                                </button>
                            </div>
                        </NavLink>
                    </li>
                </ul>
            </aside>
        </div>
    );
}
