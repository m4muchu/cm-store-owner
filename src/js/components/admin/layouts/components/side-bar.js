import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
// import { useContext } from 'react';
// import { AuthProvider } from 'js/contexts';
import { Accordion, Card, Button } from 'react-bootstrap'

export const Sidebar = () => {
  const [state, menuToggle] = useState({
    order: false,
    catalog: false,
    discount: false,
  })

  //const { auth } = useContext(AuthProvider)
  const secondLevelMenuToggle = key => {
    menuToggle({ ...state, [key]: !state[key] })
  }

  const toogleNavBar = () => {
    document.getElementById('sidebarNav').classList.toggle('open')
  }

  return (
    <div className="global-sidebar offcanvas-collapse" id="sidebarNav">
      <aside className="sidebar-wrapper sidebar-collapse shadow">
        <div className="sidebar__list--logo">
          <img
            src="/images/admin/global/logo.svg"
            className="sidebar__portal-logo"
            width="131px"
            alt=""
          />
        </div>
        <ul className="admin-sidebar text-left">
          {/*
          
            <NavLink to="/admin/dashboard" className="sidebar__list--text">
              <div className="sidenav">
                <button className="dropdown-btn">
                  <img src="/images/sidebar/home.svg" className="sidebar-button-icons" alt="" />
                  <span className="text-uppercase">Dashboard</span>
                </button>
              </div>
            </NavLink>
          </li> */}
          <Accordion defaultActiveKey="0" className="admin-sidebar-custom-accordion-header-name ">
            <li to="/admin/dashboard" className="sidebar__list">
              <NavLink to="/admin/products" className="sidebar__list--text">
                <Card className="admin-sidebar-custom-accordion sidebar__list--text  dropdown-btn">
                  <img src="/images/sidebar/home.svg" className="sidebar-button-icons" alt="" />

                  <Accordion.Toggle
                    as={Button}
                    variant="link"
                    eventKey="0"
                    className="admin-sidebar-custom-accordion-header-name"
                  >
                    DASHBOARD
                  </Accordion.Toggle>
                </Card>
              </NavLink>
            </li>
            <li className="sidebar__list">
              <NavLink to="/admin/products" className="sidebar__list--text">
                <Card className="admin-sidebar-custom-accordion sidebar__list--text  dropdown-btn">
                  <img src="/images/sidebar/catalog.svg" className="sidebar-button-icons" alt="" />

                  <Accordion.Toggle
                    as={Button}
                    variant="link"
                    eventKey="1"
                    className="admin-sidebar-custom-accordion-header-name"
                  >
                    CATALOG
                  </Accordion.Toggle>

                  <Accordion.Collapse eventKey="1">
                    <NavLink to="/admin/products">
                      {' '}
                      <Card.Body className="admin-sidebar-custom-accordion-dropdown">
                        PRODUCT
                      </Card.Body>
                    </NavLink>
                  </Accordion.Collapse>
                  <Accordion.Collapse eventKey="1">
                    <NavLink to="/admin/categories">
                      {' '}
                      <Card.Body className="admin-sidebar-custom-accordion-dropdown">
                        CATEGORY
                      </Card.Body>
                    </NavLink>
                  </Accordion.Collapse>

                  <Accordion.Collapse eventKey="1">
                    <NavLink to="/admin/collections">
                      <Card.Body className="admin-sidebar-custom-accordion-dropdown">
                        COLLECTION
                      </Card.Body>
                    </NavLink>
                  </Accordion.Collapse>
                </Card>
              </NavLink>
            </li>
            <li className="sidebar__list">
              <NavLink to="/admin/orders" className="sidebar__list--text">
                <Card className="admin-sidebar-custom-accordion sidebar__list--text  dropdown-btn">
                  <img src="/images/sidebar/order.svg" className="sidebar-button-icons" alt="" />

                  <Accordion.Toggle
                    as={Button}
                    variant="link"
                    eventKey="2"
                    className="admin-sidebar-custom-accordion-header-name"
                  >
                    ORDERS
                  </Accordion.Toggle>

                  <Accordion.Collapse eventKey="2">
                    <NavLink to="/admin/orders">
                      {' '}
                      <Card.Body className="admin-sidebar-custom-accordion-dropdown">
                        ORDER
                      </Card.Body>
                    </NavLink>
                  </Accordion.Collapse>
                  <Accordion.Collapse eventKey="2">
                    <NavLink to="/admin/drafts">
                      {' '}
                      <Card.Body className="admin-sidebar-custom-accordion-dropdown">
                        DRAFTS
                      </Card.Body>
                    </NavLink>
                  </Accordion.Collapse>
                </Card>
              </NavLink>
            </li>
            <li className="sidebar__list">
              <Card className="admin-sidebar-custom-accordion sidebar__list--text  dropdown-btn">
                <NavLink
                  to="/admin/customers"
                  onClick={toogleNavBar}
                  className="sidebar__list--text"
                >
                  <img src="/images/sidebar/customer.svg" className="sidebar-button-icons" alt="" />

                  <Accordion.Toggle
                    as={Button}
                    variant="link"
                    eventKey="3"
                    className="admin-sidebar-custom-accordion-header-name"
                  >
                    CUSTOMERS
                  </Accordion.Toggle>
                </NavLink>
              </Card>
            </li>
            <li className="sidebar__list">
              <NavLink to="/admin/sales" className="sidebar__list--text">
                <Card className="admin-sidebar-custom-accordion sidebar__list--text  dropdown-btn">
                  <img
                    src="/images/sidebar/discount.svg"
                    className="sidebar-button-icons "
                    alt=""
                  />
                  <Accordion.Toggle
                    as={Button}
                    variant="link"
                    eventKey="4"
                    className="admin-sidebar-custom-accordion-header-name"
                  >
                    DISCOUNTS
                  </Accordion.Toggle>

                  <Accordion.Collapse
                    eventKey="4"
                    className="admin-sidebar-custom-accordion-collapse"
                  >
                    <NavLink to="/admin/sales" className="admin-sidebar-custom-accordion-collapse">
                      {' '}
                      <Card.Body className="admin-sidebar-custom-accordion-dropdown">
                        SALES
                      </Card.Body>
                    </NavLink>
                  </Accordion.Collapse>
                  <Accordion.Collapse
                    eventKey="4"
                    className="admin-sidebar-custom-accordion-collapse"
                  >
                    <NavLink
                      to="/admin/vouchers "
                      className="admin-sidebar-custom-accordion-collapse"
                    >
                      {' '}
                      <Card.Body className="admin-sidebar-custom-accordion-dropdown">
                        VOUCHERS
                      </Card.Body>
                    </NavLink>
                  </Accordion.Collapse>
                </Card>
              </NavLink>
            </li>
            <li className="sidebar__list">
              <NavLink to="/admin/configuration" className="sidebar__list--text">
                <Card className="admin-sidebar-custom-accordion sidebar__list--text  dropdown-btn">
                  <img src="/images/sidebar/config.svg" className="sidebar-button-icons " alt="" />

                  <Accordion.Toggle
                    as={Button}
                    variant="link"
                    eventKey="5"
                    className="admin-sidebar-custom-accordion-header-name"
                  >
                    CONFIGURATION
                  </Accordion.Toggle>
                </Card>
              </NavLink>
            </li>
          </Accordion>

          {/* <li className="sidebar__list">
            <NavLink to="/admin/products" className="sidebar__list--text">
              <div className="sidenav">
                <button onClick={() => secondLevelMenuToggle('catalog')} className="dropdown-btn">
                  <img src="/images/sidebar/catalog.svg" className="sidebar-button-icons" alt="" />
                  <span className="text-uppercase">Catalog</span>
                    <svg
                        className={state.catalog ? 'MuiSvgIcon_root_2' : 'MuiSvgIcon_root_3'}
                        focusable="false"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                    >
                        <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
                  </svg>
                  <svg
                    className={state.catalog ? 'MuiSvgIcon_root_3' : 'MuiSvgIcon_root_2'}
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"></path>
                  </svg>
                </button>
                <div className={state.catalog ? 'all_style' : 'none_style'}>
                  <NavLink to="/admin/products">Products</NavLink>
                  <NavLink to="/admin/categories">Category</NavLink>
                  <NavLink to="/admin/collections">Collection</NavLink>
                </div>
              </div>
            </NavLink>
          </li>
          <li className="sidebar__list">
            <NavLink to="/admin/orders" className="sidebar__list--text">
              <div className="sidenav">
                <button onClick={() => secondLevelMenuToggle('order')} className="dropdown-btn">
                  <img src="/images/sidebar/order.svg" className="sidebar-button-icons" alt="" />
                  <span className="text-uppercase">Orders</span>
                  <svg
                    className={state.order ? 'MuiSvgIcon_root_2' : 'MuiSvgIcon_root_3'}
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
                  </svg>
                  <svg
                    className={state.order ? 'MuiSvgIcon_root_3' : 'MuiSvgIcon_root_2'}
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"></path>
                  </svg>
                </button>
                <div className={state.order ? 'all_style' : 'none_style'}>
                  <NavLink to="/admin/orders">Orders</NavLink>
                  <NavLink to="/admin/drafts">Drafts</NavLink>
                </div>
              </div>
            </NavLink>
          </li>
          <li className="sidebar__list">
            <NavLink to="/admin/customers" onClick={toogleNavBar} className="sidebar__list--text">
              <div className="sidenav">
                <button className="dropdown-btn">
                  <img src="/images/sidebar/customer.svg" className="sidebar-button-icons" alt="" />
                  <span className="text-uppercase">Customers</span>
                </button>
              </div>
            </NavLink>
          </li>
          <li className="sidebar__list">
            <NavLink to="/admin/sales" className="sidebar__list--text">
              <div className="sidenav">
                <button onClick={() => secondLevelMenuToggle('discount')} className="dropdown-btn">
                  <img
                    src="/images/sidebar/discount.svg"
                    className="sidebar-button-icons "
                    alt=""
                  />
                  <span className="text-uppercase">Discounts</span>
                  <svg
                    className={state.discount ? 'MuiSvgIcon_root_2' : 'MuiSvgIcon_root_3'}
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
                  </svg>
                  <svg
                    className={state.discount ? 'MuiSvgIcon_root_3' : 'MuiSvgIcon_root_2'}
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"></path>
                  </svg>
                </button>
                <div className={state.discount ? 'all_style' : 'none_style'}>
                  <NavLink to="/admin/sales">Sales</NavLink>
                  <NavLink to="/admin/vouchers">Vouchers</NavLink>
                </div>
              </div>
            </NavLink>
          </li>
          {/* <li className="sidebar__list">
                        <NavLink to='/admin/exchanges' onClick={toogleNavBar} className="sidebar__list--text" >
                            <div className="sidenav">
                                <button className="dropdown-btn">
                                    <img src='/images/sidebar/language.svg' className="sidebar-button-icons "alt=""  />
                                    <span className="text-uppercase">Translations</span>
                                </button>
                            </div>
                        </NavLink>
                    </li> */}
          {/* <li className="sidebar__list">
            <NavLink to="/admin/configuration" className="sidebar__list--text">
              <div className="sidenav">
                <button className="dropdown-btn">
                  <img src="/images/sidebar/config.svg" className="sidebar-button-icons " alt="" />
                  <span className="text-uppercase">Configuration</span>
                </button>
              </div>
            </NavLink>
          </li>  */}
        </ul>
      </aside>
    </div>
  )
}
