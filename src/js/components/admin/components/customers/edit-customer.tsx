import React from 'react';
import { Button, Row, Col, Form, Table } from "react-bootstrap";
import { history } from 'js/helpers';

export const EditCustomer = () => {

    return (
        <section className="edit-customer-section">
            <div className="generic-page-header">
                <h2 className="page-head my-0">Edit Customer</h2>
                <Button
                    className="add-new-btn"
                //onClick={() => history.push('/admin/create-product')}
                >
                    Save Changes
          		</Button>
            </div>
            <Row className="mt-5">
                <Col xl={8}>
                    <div className="dashboard-activity-card">
                        <h5 className="card-title--create-cutomer">admin@example.com</h5>
                        <span className="card-title-info">Active member since Dec 2019</span>
                        <hr className="MuiDivider-root" />
                        <div className="card-data-wrapper">
                            <div className="cm-admin-checkbox ml-1">
                                <Form.Check
                                    type="checkbox"
                                    id="tt-check-lead-select-all"
                                    className="cc-checkbox"
                                    // onChange={(e) => selectAll(e.target.checked)}
                                    // checked={state.select_all ? state.select_all : false}
                                    label="User account active"
                                />
                            </div>
                            <Form.Group className="mt-3">
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    placeholder="Note"
                                />
                            </Form.Group>
                        </div>
                    </div>
                    <div className="dashboard-activity-card mt-4">
                        <h5 className="card-title">Personal Informations</h5>
                        <hr className="MuiDivider-root" />
                        <div className="card-data-wrapper">
                            <Row className="personal-information--input-section">
                                <Col md={12}>
                                    <div className="personal-information-sub-head pb-2">General Informations</div>
                                </Col>
                                <Col md={6} className="mb-4">
                                    <div className="input-area">
                                        <Form.Control type="text" placeholder="First Name" />
                                    </div>
                                </Col>
                                <Col md={6} className="mb-4">
                                    <div className="input-area">
                                        <Form.Control type="text" placeholder="Last Name" />
                                    </div>
                                </Col>
                                <Col md={12}>
                                    <hr className="divider-root mb-4 mt-2" />
                                </Col>
                                <Col md={12}>
                                    <div className="personal-information-sub-head pb-2">Contact Informations</div>
                                </Col>
                                <Col md={6}>
                                    <div className="input-area">
                                        <Form.Control type="email" placeholder="Email" />
                                    </div>
                                </Col>
                            </Row>

                        </div>
                    </div>

                    <div className="dashboard-activity-card mt-4">
                        <div className="d-flex justify-content-between">
                            <h5 className="card-title">Recent Orders</h5>
                            <span className="card-title-right text-uppercase" onClick={() => history.push('/admin/orders')}>View all orders</span>
                        </div>
                        <hr className="MuiDivider-root" />
                        <div className="card-data-wrapper">
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
                                                <th>No. of Order</th>
                                                <th>Date</th>
                                                <th>Status</th>
                                                <th>Total</th>
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
                                                <td>$333</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col xl={4}>
                    <div className="dashboard-activity-card">
                        <div className="d-flex justify-content-between">
                            <h5 className="card-title">Address Information</h5>
                            <span className="card-title-right text-uppercase">Manage</span>
                        </div>
                        <hr className="MuiDivider-root" />
                        <div className="card-data-wrapper">

                        </div>
                    </div>
                    <div className="dashboard-activity-card">
                        <h5 className="card-title">Customer History</h5>
                        <hr className="MuiDivider-root" />
                        <div className="card-data-wrapper">

                        </div>
                    </div>
                </Col>
            </Row>
            {/* 
            <Row className="mt-5 d-flex justify-content-center">
                <Button
                    className="add-new-btn text-uppercase"
                    //onClick={() => history.push('/admin/create-product')}
                >
                    Create Product
          			</Button>
            </Row> */}
        </section>
    )
}