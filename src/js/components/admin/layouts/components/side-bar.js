import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import { useState } from 'react';
import { useContext } from 'react';
import { AuthProvider } from 'js/contexts';


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
                                <button className="dropdown-btn">
                                    <img src='/images/sidebar/home.svg' className="sidebar-button-icons" alt="" />
                                    <span>Home</span>
                                </button>
                            </div>
                        </NavLink>
                    </li>

                    <li className="sidebar__list">
                        <NavLink to='/admin/trip-management' className="sidebar__list--text">
                            <div className="sidenav">
                                <button onClick={handleClickCatalog} className="dropdown-btn">
                                    <img src='/images/sidebar/catalog.svg' className="sidebar-button-icons " alt="" />
                                    <span>Catalog</span>
                                    <svg
                                        className={catalog ? "MuiSvgIcon_root_2" : "MuiSvgIcon_root_3"}
                                        focusable="false"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                    >
                                        <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
                                    </svg>
                                    <svg className={catalog ? "MuiSvgIcon_root_3" : "MuiSvgIcon_root_2"} focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"></path></svg>
                                </button>
                                <div className={catalog ? "all_style" : "none_style"}>
                                    <a href="/">Product</a>
                                    <a href="/">Category</a>
                                    <a href="/">Collection</a>
                                </div>
                            </div>
                        </NavLink>
                    </li>
                    <li className="sidebar__list">
                        <NavLink to='/admin/user-management' className="sidebar__list--text">
                            <div className="sidenav">
                                <button onClick={handleClick} className="dropdown-btn">
                                    <img src='/images/sidebar/order.svg' className="sidebar-button-icons"alt=""  />
                                    <span>Orders</span>
                                    <svg
                                        className={order ? "MuiSvgIcon_root_2" : "MuiSvgIcon_root_3"}
                                        focusable="false"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                    >
                                        <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
                                    </svg>
                                    <svg className={order ? "MuiSvgIcon_root_3" : "MuiSvgIcon_root_2"} focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"></path></svg>
                                </button>
                                <div className={order ? "all_style" : "none_style"}>
                                    <a href="/">Orders</a>
                                    <a href="/">Drafts</a>
                                </div>
                            </div>
                        </NavLink>
                    </li>
                    <li className="sidebar__list">
                        <NavLink to='/admin/leads' onClick={toogleNavBar} className="sidebar__list--text">
                            <div className="sidenav">
                                <button className="dropdown-btn">
                                    <img src='/images/sidebar/customer.svg' className="sidebar-button-icons"alt=""  />

                                    <span>Customers</span>
                                </button>
                            </div>
                        </NavLink>
                    </li>
                    <li className="sidebar__list">
                        <NavLink to='/admin/user-management' className="sidebar__list--text">
                            <div className="sidenav">
                                <button onClick={handleClickDiscount} className="dropdown-btn">
                                    <img src='/images/sidebar/discount.svg' className="sidebar-button-icons "alt=""  />
                                    <span>Discounts</span>
                                    <svg
                                        className={discount ? "MuiSvgIcon_root_2" : "MuiSvgIcon_root_3"}
                                        focusable="false"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                    >
                                        <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
                                    </svg>
                                    <svg className={discount ? "MuiSvgIcon_root_3" : "MuiSvgIcon_root_2"} focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"></path></svg>
                                </button>
                                <div className={discount ? "all_style" : "none_style"}>
                                    <a href="/">Sales</a>
                                    <a href="/">Vouchers</a>
                                </div>
                            </div>
                        </NavLink>
                    </li>
                    <li className="sidebar__list">
                        <NavLink to='/admin/exchanges' onClick={toogleNavBar} className="sidebar__list--text" >
                            <div className="sidenav">
                                <button className="dropdown-btn">
                                    <img src='/images/sidebar/language.svg' className="sidebar-button-icons "alt=""  />
                                    <span>Translations</span>
                                </button>
                            </div>
                        </NavLink>
                    </li>
                    <li className="sidebar__list">
                        <NavLink to='/admin/advertising' className="sidebar__list--text" >
                            <div className="sidenav">
                                <button className="dropdown-btn">
                                    <img src='/images/sidebar/config.svg ' className="sidebar-button-icons " alt="" />
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
