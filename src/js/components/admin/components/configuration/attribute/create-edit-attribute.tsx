import React from 'react';
import { Button, Table, Row, Col, Form } from "react-bootstrap";
import { history } from 'js/helpers';


export const CreateEditAttribute = () => {

    return (
        <section className="crearte-products-section">
            <div className="generic-page-header">
                <h2 className="page-head my-0">Create New Attribute</h2>
                <Button
                    className="add-new-btn"
                //onClick={() => history.push('/admin/create-product')}
                >
                    Save Changes
          		</Button>
            </div>
            <Row className="mt-5">
                <Col xl={8}>
                    <div className="dash_activity_card">
                        <h5 className="card-title">General Informations</h5>
                        <hr className="MuiDivider-root" />
                        <div className="card-data-wrapper">
                            <div className="input-area mb-4">
                                <Form.Control type="text" placeholder="Default Label" />
                            </div>
                            <div className="input-area">
                                <Form.Control type="text" placeholder="Attribute Code" />
                            </div>
                        </div>
                    </div>

                    <div className="dash_activity_card mt-4">
                        <div className="d-flex justify-content-between">
                            <h5 className="card-title">Attribute Values</h5>
                            <span className="card-title-right text-uppercase" onClick={() => history.push('/admin/create-variant')}>Assign Value</span>
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
                                                <th>Admin</th>
                                                <th>Default Store View</th>
                                                <th></th>
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
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col xl={4}>
                    <div className="dash_activity_card">
                        <h5 className="card-title">Properties</h5>
                        <hr className="MuiDivider-root" />
                        <div className="card-data-wrapper">

                        </div>
                    </div>
                </Col>
            </Row>
        </section>
    )
}