import React from 'react';
import { Button, Row, Col, Form } from "react-bootstrap";
import Select from "react-select";


export const CreateCustomer = () => {


    return (
        <section className="crearte-products-section">
            <div className="generic-page-header">
                <h2 className="page-head my-0">Create Customer</h2>
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
                        <h5 className="card-title">Customer Overview</h5>
                        <hr className="MuiDivider-root" />
                        <div className="card-data-wrapper">
                            <Row>
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
                                <Col md={6}>
                                    <div className="input-area">
                                        <Form.Control type="text" placeholder="E-mail Address" />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                    <div className="dash_activity_card mt-4">
                        <h5 className="card-title">Primary Address</h5>
                        <hr className="MuiDivider-root" />
                        <div className="card-data-wrapper">
                            <Row>
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
                                <Col md={6} className="mb-4">
                                    <div className="input-area">
                                        <Form.Control type="text" placeholder="Company" />
                                    </div>
                                </Col>
                                <Col md={6} className="mb-4">

                                    <div className="input-area">
                                        <Form.Control type="number" placeholder="Phone" />
                                    </div>
                                </Col>
                                <Col md={12} className="mb-4">
                                    <div className="input-area">
                                        <Form.Control type="text" placeholder="address line 1" />
                                    </div>
                                </Col>
                                <Col md={12} className="mb-4">
                                    <div className="input-area">
                                        <Form.Control type="text" placeholder="address line 2" />
                                    </div>
                                </Col>
                                <Col md={6} className="mb-4">
                                    <div className="input-area">
                                        <Form.Control type="text" placeholder="City" />
                                    </div>
                                </Col>
                                <Col md={6} className="mb-4">

                                    <div className="input-area">
                                        <Form.Control type="text" placeholder="ZIP / Postal code" />
                                    </div>
                                </Col>
                                <Col md={6} className="mb-4">
                                    <div className="custom-react-select">
                                        <Select
                                            placeholder="Bulk Action"
                                            className="react-select-container"
                                            classNamePrefix="react-select"
                                        // options={BulkActionItems}
                                        //styles={styles}
                                        // onChange={(e: any) => {
                                        //     setBulkAction(e.value);
                                        // }}
                                        />
                                    </div>
                                </Col>
                                <Col md={6} className="mb-4">
                                    <div className="input-area">
                                        <Form.Control type="text" placeholder="Country area" />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Col>
                <Col xl={4}>
                    <div className="dash_activity_card">
                        <h5 className="card-title">Notes</h5>
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