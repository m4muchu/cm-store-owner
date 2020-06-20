import React, { useState, useEffect } from "react";
import { Button, Table, Row, Col, Form } from "react-bootstrap";
import Select from "react-select";
import AsyncSelect from "react-select/async";

// interface BulkActionItem {
//     value: string,
//     label: string,

// }

// const BulkActionItems: BulkActionItem[] = [
//     { value: 'delete', label: 'Delete' },
//     { value: 'publish', label: 'Publish' },
//     { value: 'un_publish', label: 'Unpublish' }
// ]
// const [buttonstate, setButton] = useState(false);
// const handleClick = () => {
//   return setButton(!buttonstate);
// };

export const Products = () => {
  const [state, menuToggle] = useState({
    Nike: true,
    addidas: true,
    puma: true,
  });
  const [buttonstate, setButton] = useState(false);
  const handleClick = (e) => {
      return(
      setButton(!buttonstate)

    
      )};
  
  const secondLevelMenuToggle = (key) => {
    menuToggle({ ...state, [key]: !state[key] });
  };
  const handleClear = () => {
    return menuToggle({ ...state });
  };
   
  const handleChange=(e) => {
    console.log("calslds")

    e.preventDefault()
    

  }

  return (
    <section className="products-section">
      <div className="generic-page-header">
        <h2 className="page-head my-0">Products</h2>
        <div className="header-data-section">
          <Button className="coloumn-btn mr-3 text-uppercase">
            <i>
              <svg
                width="19"
                height="17"
                viewBox="0 0 19 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14.728 12.8206H11.9003L9.97152 10.0926L7.94478 12.8206H5.10477L8.62819 8.38936L5.78315 4.51387H8.6517L9.98439 6.62121L11.4044 4.51387H14.3233L11.3406 8.38936L14.728 12.8206ZM18.4585 16.6071H1.66699V0.570107H18.4585V16.6071ZM3.2801 14.994H16.8426V2.18433H3.2801"
                  fill="#10C56E"
                />
              </svg>
            </i>
            Columns
          </Button>
          <Button
            className="add-new-btn text-uppercase"
            // onClick={() => history.push('/admin/leads/add-lead')}
          >
            <i>
              <svg
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.03027 7.77295H0.171875V5.6001H5.03027V0.619629H7.22754V5.6001H12.0981V7.77295H7.22754V12.729H5.03027V7.77295Z"
                  fill="#fff"
                />
              </svg>
            </i>
            Add Product
          </Button>
        </div>
      </div>
      <div className="cm-admin-card">
        <div className="cm-admin-card--header cm-admin-card--header_filter">
          <div className="cm-filter">
            <Form>
              <Row className="justify-content-between">
                <Col xs="12" lg="5">
                  <Row>
                    <Col xs="12" lg="6">
                      <Form.Group>
                        <div className="custom-react-select--no-border w-100">
                          <Select
                            placeholder="Bulk Action"
                            className="react-select-container"
                            classNamePrefix="react-select"
                            // options={BulkActionItems}
                            // styles={styles}
                            // onChange={(e) => {
                            //     bulkAction(e.value);
                            // }}
                          />
                        </div>
                      </Form.Group>
                    </Col>
                    <Col xs="12" lg="6">
                      <Form.Group>
                        <div className="filter-input--outer">
                          <Form.Control
                            type="text"
                            name=""
                            id=""
                            placeholder="Search Products"
                            //onChange={(e) => onParamsChange('search', e.target.value)}
                          />
                        </div>
                      </Form.Group>
                    </Col>
                  </Row>
                </Col>
                <Col xs="12" lg="5">
                  <Row>
                    <Col xs="12" md="6">
                      <Form.Group>
                        <div className="custom-react-select--no-border w-100">
                          <div>
                            <div
                              onClick={() => handleClick()}
                              onChange={()=>handleChange }
                              className="filter-dropdown-btn"
                            >
                              FILTRE
                            </div>

                            <div
                              className={
                                buttonstate
                                  ? "allStyle-filter"
                                  : "noneStyle-filter"
                              }
                            >
                              <div className="filter_card">
                                <div className="filter-card-body">
                                  <div className="filter-card-header">
                                    <h5 className="card-title">FILTRE</h5>
                                    <button className="filter-save">SAVE</button>
                                    <button
                                      className="filter-clear"
                                      onClick={() => handleClear()}
                                    >
                                      CLEAR
                                    </button>
                                  </div>

                                  <hr className="MuiDivider-root-filter padding-adjustmnet" />
                                  <div className="filter-options-wrapper">
                                    <div className="filter-options">
                                      <input
                                        type="checkbox"
                                        id="myCheck"
                                        onChange={() =>
                                          secondLevelMenuToggle("Nike")
                                        }
                                      />

                                      <p className="filter-drop-outer-text">Nike</p>
                                    </div>
                                    <div
                                      className={
                                        state.Nike
                                          ? "filter_inner_list_close"
                                          : "filter_inner_list_open"
                                      }
                                    >
                                      <ul>
                                        <li>
                                          <input type="checkbox" />
                                          <p>neo</p>
                                        </li>

                                        <li>
                                          <input type="checkbox" />
                                          <p>neo</p>
                                        </li>

                                        <li>
                                          <input type="checkbox" />
                                          <p>neo</p>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>

                                <div className="">
                                  <hr className="MuiDivider-root-filter" />
                                  <div className="filter-options-wrapper">
                                    <div className="filter-options">
                                      <input
                                        type="checkbox"
                                        onChange={() =>
                                          secondLevelMenuToggle("addidas")
                                        }
                                      />

                                      <p className=" filter-drop-outer-text ">
                                        Addidas
                                      </p>
                                    </div>
                                    <div
                                      className={
                                        state.addidas
                                          ? "filter_inner_list_close"
                                          : "filter_inner_list_open"
                                      }
                                    >
                                      <ul>
                                        <li>
                                          <input type="checkbox" />
                                          <p>neo</p>                                        </li>

                                        <li>
                                          <input type="checkbox" />
                                          <p>neo</p>                                        </li>

                                        <li>
                                          <input type="checkbox" />
                                          <p>neo</p>                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>

                                <div className="">
                                  <hr className="MuiDivider-root-filter" />
                                  <div className="filter-options-wrapper">
                                    <div className="filter-options">
                                      <input
                                        type="checkbox"
                                        onChange={() =>
                                          secondLevelMenuToggle("puma")
                                        }
                                      />

                                      <p className= " filter-drop-outer-text ">Puma</p>
                                    </div>
                                    <div
                                      className={
                                        state.puma
                                          ? "filter_inner_list_close"
                                          : "filter_inner_list_open"
                                      }
                                    >
                                      <ul>
                                        <li>
                                          <input type="checkbox" />
                                          <p>neo</p>                                        </li>

                                        <li>
                                          <input type="checkbox" />
                                          <p>neo</p>                                        </li>

                                        <li>
                                          <input type="checkbox" />
                                          <p>neo</p>                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Form.Group>
                    </Col>
                    <Col xs="12" md="6">
                      <Form.Group>
                        <div className="custom-react-select--no-border w-100">
                          <Select
                            placeholder="Status"
                            className="react-select-container"
                            classNamePrefix="react-select"
                            // options={lookups.lead_status}
                            // styles={styles}
                            // onChange={(e) => {
                            //     onParamsChange('status', e.value);
                            // }}
                          />
                        </div>
                      </Form.Group>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Form>
          </div>
        </div>
        <div className="cm-admin-card--data">
          <div className="table-wrap">
            <Table
              responsive
              className="cm-admin-table-compact cm-admin-table-compact--checkbox "
            >
              <thead>
                <tr>
                  <th>
                    <div className="cm-admin-checkbox">
                      <Form.Check
                        type="checkbox"
                        id="tt-check-lead-select-all"
                        className="cc-checkbox"
                        // onChange={(e) => selectAll(e.target.checked)}
                        // checked={state.select_all ? state.select_all : false}
                      />
                    </div>
                  </th>
                  <th>Name</th>
                  <th>Type</th>
                  <th>ABV</th>
                  <th>Size</th>
                  <th>Material</th>
                  <th>Color</th>
                  <th>Volume</th>
                  <th className="sortable" onClick={() => console.log("tets")}>
                    Status
                  </th>
                  <th>Price</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="tt-admin-checkbox">
                      <Form.Check
                        type="checkbox"
                        // id={'tt-check' + lead.lead_id}
                        className="tt-checkbox"
                        // onChange={(e) => {
                        //     setState({
                        //         ...state, selected_lead: { ...state.selected_lead, [lead.lead_id]: e.target.checked }
                        //     });
                        // }}
                        // checked={state.selected_lead[lead.lead_id] ? state.selected_lead[lead.lead_id] : false}
                      />
                    </div>
                  </td>
                  <td>test</td>
                  <td>test</td>
                  <td>test</td>
                  <td>test</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
        {/* {leads && leads.meta &&
                        <PaginationComponent page={leads.meta} onChange={(page) => onParamsChange('page', page)} />
                    } */}
      </div>
    </section>
  );
};
