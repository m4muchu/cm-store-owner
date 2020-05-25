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
    const [buttonstate, setButton] = useState(false);
    const handleClick = () => {
        return setButton(!buttonstate);
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
                                    <span>Customer</span>
                                    <svg
                                        class="MuiSvgIcon-root"
                                        focusable="false"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                    >
                                        <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
                                    </svg>

                                    <div className={buttonstate ? "allStyle" : "noneStyle"}>
                                        <a href="/">List Customer</a>
                                        <a href="/">View Customer</a>
                                        <a href="/">EditCustomer</a>
                                    </div>
                                </button>

                            </div>

                        </NavLink>
                    </li>

                    <li className="sidebar__list">
                        <NavLink to='/admin/trip-management' className="sidebar__list--text">
                            
                               
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
                                    <span>Customer</span>
                                    <svg
                                        class="MuiSvgIcon-root"
                                        focusable="false"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                    >
                                        <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
                                    </svg>

                                    <div className={buttonstate ? "allStyle" : "noneStyle"}>
                                        <a href="/">List Customer</a>
                                        <a href="/">View Customer</a>
                                        <a href="/">EditCustomer</a>
                                    </div>
                                </button>

                            </div>
                        </NavLink>
                    </li>
                    <li className="sidebar__list">
                        <NavLink to='/admin/user-management' className="sidebar__list--text">
                            <i>
                                <svg width="17" height="17" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.53907 6.43542C7.25975 6.43542 8.6564 5.03902 8.6564 3.31758C8.6564 1.59614 7.26001 0.199997 5.53907 0.199997C3.81864 0.199997 2.42174 1.59639 2.42174 3.31783C2.42174 5.03928 3.81864 6.43542 5.53907 6.43542Z" fill="#758599" />
                                    <path d="M12.1756 8.37305C11.1946 8.37305 10.291 8.77815 9.5689 9.45728C8.63595 7.98739 7.17818 7.03954 5.53933 7.03954C2.72456 7.03954 0.440674 9.83258 0.440674 13.275C0.440674 14.4238 1.20113 15.3533 2.14039 15.3533H8.93852C9.00671 15.3533 9.07338 15.347 9.13955 15.3376C9.19916 15.3472 9.25977 15.3535 9.32165 15.3535H15.0295C15.8182 15.3535 16.4567 14.5731 16.4567 13.6083C16.4567 10.7181 14.539 8.37305 12.1756 8.37305Z" fill="#758599" />
                                    <path d="M12.1756 7.86616C13.6205 7.86616 14.7928 6.69353 14.7928 5.24839C14.7928 3.80325 13.6202 2.63062 12.1756 2.63062C10.7309 2.63062 9.55855 3.80325 9.55855 5.24839C9.55855 6.69353 10.7307 7.86616 12.1756 7.86616Z" fill="#758599" />
                                </svg>
                            </i>
                            Orders
                        </NavLink>
                    </li>
                    <li className="sidebar__list">
                        <NavLink to='/admin/leads' onClick={toogleNavBar} className="sidebar__list--text">
                            <i>
                                <svg width="17" height="17" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.27647 8.56079C6.37586 8.56079 7.37096 8.11499 8.09141 7.39454C8.81106 6.67488 9.25687 5.67978 9.25687 4.5804C9.25687 3.48101 8.81106 2.48592 8.09141 1.76626C7.37096 1.04581 6.37586 0.600006 5.27647 0.600006C4.17709 0.600006 3.18199 1.04581 2.46154 1.76626C1.74189 2.48592 1.29608 3.48101 1.29608 4.5804C1.29608 5.67978 1.74189 6.67488 2.46154 7.39454C3.18199 8.11499 4.17709 8.56079 5.27647 8.56079Z" fill="#758599" />
                                    <path d="M5.27647 14.1333C8.07707 14.1333 10.0529 13.3373 10.0529 12.5412C10.0529 10.949 8.17897 9.35687 5.27647 9.35687C2.29118 9.35687 0.5 10.949 0.5 12.5412C0.5 13.3373 2.29118 14.1333 5.27647 14.1333Z" fill="#758599" />
                                    <path d="M14.8294 6.96863H13.2373V5.37648C13.2373 4.93625 12.8814 4.5804 12.4412 4.5804C12.0009 4.5804 11.6451 4.93625 11.6451 5.37648V6.96863H10.0529C9.61271 6.96863 9.25687 7.32448 9.25687 7.76471C9.25687 8.20494 9.61271 8.56079 10.0529 8.56079H11.6451V10.1529C11.6451 10.5932 12.0009 10.949 12.4412 10.949C12.8814 10.949 13.2373 10.5932 13.2373 10.1529V8.56079H14.8294C15.2696 8.56079 15.6255 8.20494 15.6255 7.76471C15.6255 7.32448 15.2696 6.96863 14.8294 6.96863Z" fill="#758599" />
                                </svg>
                            </i>
                            Customers
                        </NavLink>
                    </li>
                    <li className="sidebar__list">
                        <NavLink to='/admin/exchanges' onClick={toogleNavBar} className="sidebar__list--text" >
                            <i>
                                <svg width="17" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M0.034668 15.1378C0.034668 15.8713 0.628787 16.4653 1.36216 16.4653H14.6378C15.3713 16.4653 15.9653 15.8713 15.9653 15.1378V3.52166C15.9653 2.78818 15.3713 2.19407 14.6378 2.19407H13.3101V1.36437C13.3101 0.906431 12.9384 0.534668 12.4805 0.534668C12.0225 0.534668 11.6507 0.906431 11.6507 1.36437V2.19407H10.3232V1.36437C10.3232 0.906431 9.95134 0.534668 9.49341 0.534668C9.03547 0.534668 8.66375 0.906431 8.66375 1.36437V2.19407H7.33626V1.36437C7.33626 0.906431 6.96449 0.534668 6.50656 0.534668C6.04851 0.534668 5.67675 0.906431 5.67675 1.36437V2.19407H4.34926V1.36437C4.34926 0.906431 3.9775 0.534668 3.51949 0.534668C3.06155 0.534668 2.68979 0.906431 2.68979 1.36437V2.19407H1.36219C0.628787 2.19407 0.0347045 2.78818 0.0347045 3.52166V15.1378H0.034668ZM2.42437 3.8535H2.68979V5.01511C2.68979 5.47312 3.06155 5.84488 3.51949 5.84488C3.97754 5.84488 4.34926 5.47312 4.34926 5.01511V3.8535H5.67675V5.01511C5.67675 5.47312 6.04851 5.84488 6.50656 5.84488C6.96449 5.84488 7.33626 5.47312 7.33626 5.01511V3.8535H8.66382V5.01511C8.66382 5.47312 9.03554 5.84488 9.49348 5.84488C9.95142 5.84488 10.3233 5.47312 10.3233 5.01511V3.8535H11.6507V5.01511C11.6507 5.47312 12.0226 5.84488 12.4806 5.84488C12.9385 5.84488 13.3102 5.47312 13.3102 5.01511V3.8535H13.5757C13.9806 3.8535 14.3059 4.17894 14.3059 4.58376V8.10164C14.3059 8.50647 13.9806 8.83191 13.5757 8.83191H2.42437C2.0194 8.83191 1.6941 8.50647 1.6941 8.10164V4.58376C1.69407 4.17894 2.01936 3.8535 2.42437 3.8535Z" fill="#758599" />
                                </svg>
                            </i>
                            Discount
                        </NavLink>
                    </li>
                    <li className="sidebar__list">
                        <NavLink to='/admin/advertising' onClick={toogleNavBar} className="sidebar__list--text" >
                            <i>
                                <svg width="27" height="27" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M11.4352 1.21031C12.5415 0.582298 12.8606 0.401201 13.33 0.682854C13.5924 0.834242 13.757 1.11142 13.7643 1.41428V12.8429C13.7529 13.1341 13.5963 13.4002 13.3471 13.5514C12.8866 13.8232 12.5633 13.642 11.5068 13.0499C11.2525 12.9073 10.9557 12.741 10.6043 12.5514C9.24478 11.8192 7.7766 11.3099 6.25571 11.0429L7.61571 13.4314C9.20428 16.2314 4.29 17.9343 3.82714 14.7229L3.25571 10.7857C1.34164 10.5043 -0.0358645 8.80072 0.089556 6.87014C0.214977 4.93956 1.80132 3.42856 3.73571 3.39714C6.12809 3.40211 8.48427 2.81306 10.5929 1.68285C10.9172 1.50434 11.1948 1.34677 11.4352 1.21031ZM14.9071 9.07143V5.15714C15.9106 5.23334 16.6708 6.09488 16.6214 7.1C16.6869 8.11593 15.9223 8.99522 14.9071 9.07143Z" fill="#758599" />
                                </svg>
                            </i>
                            Cofiguration
                        </NavLink>
                    </li>
                </ul>
            </aside>
        </div>
    );
}
