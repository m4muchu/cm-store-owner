import React from 'react';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
// import { useContext } from 'react';
// import { AuthProvider } from 'js/contexts';


export const Sidebar = () => {
    const [state, menuToggle] = useState({
        order: false,
        catalog: false,
        discount: false,
    })

    //const { auth } = useContext(AuthProvider)
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
                        <NavLink to='/admin/dashboard' className="sidebar__list--text">
                            <div className="sidenav">
                                <button className="dropdown-btn">
                                    <img src='/images/sidebar/home.svg' className="sidebar-button-icons" alt="" />
                                    <span className="text-uppercase">Dashboard</span>
                                </button>
                            </div>
                        </NavLink>
                    </li>
                    <li className="sidebar__list">
                        <NavLink to='/admin/products' className="sidebar__list--text">
                            <div className="sidenav">
                                <button onClick={() => secondLevelMenuToggle('catalog')} className="dropdown-btn">
                                    <img src='/images/sidebar/catalog.svg' className="sidebar-button-icons " alt="" />
                                    <span className="text-uppercase">Catalog</span>
                                    <svg
                                        className={state.catalog ? "MuiSvgIcon_root_2" : "MuiSvgIcon_root_3"}
                                        focusable="false"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                    >
                                        <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
                                    </svg>
                                    <svg className={state.catalog ? "MuiSvgIcon_root_3" : "MuiSvgIcon_root_2"} focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"></path></svg>
                                </button>
                                <div className={state.catalog ? "all_style" : "none_style"}>
                                    <NavLink to="/admin/products">Products</NavLink>
                                    <NavLink to="/admin/categories">Category</NavLink>
                                    <NavLink to="/admin/collections">Collection</NavLink>
                                </div>
                            </div>
                        </NavLink>
                    </li>
                    <li className="sidebar__list">
                        <NavLink to='/admin/orders' className="sidebar__list--text">
                            <div className="sidenav">
                                <button onClick={() => secondLevelMenuToggle('order')} className="dropdown-btn">
                                    <img src='/images/sidebar/order.svg' className="sidebar-button-icons"alt=""  />
                                    <span className="text-uppercase">Orders</span>
                                    <svg
                                        className={state.order ? "MuiSvgIcon_root_2" : "MuiSvgIcon_root_3"}
                                        focusable="false"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                    >
                                        <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
                                    </svg>
                                    <svg className={state.order ? "MuiSvgIcon_root_3" : "MuiSvgIcon_root_2"} focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"></path></svg>
                                </button>
                                <div className={state.order ? "all_style" : "none_style"}>
                                    <NavLink to="/admin/orders">Orders</NavLink>
                                    <NavLink to="/admin/drafts">Drafts</NavLink>
                                </div>
                            </div>
                        </NavLink>
                    </li>
                    <li className="sidebar__list">
                        <NavLink to='/admin/customers' onClick={toogleNavBar} className="sidebar__list--text">
                            <div className="sidenav">
                                <button className="dropdown-btn">
                                    <img src='/images/sidebar/customer.svg' className="sidebar-button-icons"alt=""  />
                                    <span className="text-uppercase">Customers</span>
                                </button>
                            </div>
                        </NavLink>
                    </li>
                    <li className="sidebar__list">
                        <NavLink to='/admin/sales' className="sidebar__list--text">
                            <div className="sidenav">
                                <button onClick={() => secondLevelMenuToggle('discount')} className="dropdown-btn">
                                    <img src='/images/sidebar/discount.svg' className="sidebar-button-icons "alt=""  />
                                    <span className="text-uppercase">Discounts</span>
                                    <svg
                                        className={state.discount ? "MuiSvgIcon_root_2" : "MuiSvgIcon_root_3"}
                                        focusable="false"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                    >
                                        <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
                                    </svg>
                                    <svg className={state.discount ? "MuiSvgIcon_root_3" : "MuiSvgIcon_root_2"} focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"></path></svg>
                                </button>
                                <div className={state.discount ? "all_style" : "none_style"}>
                                    <NavLink to="/admin/sales">Sales</NavLink>
                                    <NavLink to="/admin/vouchers">Vouchers</NavLink>
                                </div>
                            </div>
                        </NavLink>
                    </li>
                    <li className="sidebar__list">
                        <NavLink to='/admin/exchanges' onClick={toogleNavBar} className="sidebar__list--text" >
                            <div className="sidenav">
                                <button className="dropdown-btn">
                                    <img src='/images/sidebar/language.svg' className="sidebar-button-icons "alt=""  />
                                    <span className="text-uppercase">Translations</span>
                                </button>
                            </div>
                        </NavLink>
                    </li>
                    <li className="sidebar__list">
                        <NavLink to='/admin/advertising' className="sidebar__list--text" >
                            <div className="sidenav">
                                <button className="dropdown-btn">
                                    <img src='/images/sidebar/config.svg ' className="sidebar-button-icons " alt="" />
                                    <span className="text-uppercase">Configuration</span>
                                </button>
                            </div>
                        </NavLink>
                    </li>
                </ul>
            </aside>
        </div>
    );
}
