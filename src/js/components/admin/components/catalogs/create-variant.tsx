import React from 'react';
import { Button, Table, Row, Col, Form } from "react-bootstrap";
import Select from "react-select";
import { EditorComponent, FileUploadComponent, ImageSortable } from 'js/components/common';
import classnames from 'classnames';


export const CreateVariant = () => {


    return (
        <section className="crearte-products-section">
            <div className="generic-page-header">
                <h2 className="page-head my-0">Create Variant</h2>
                <Button
                    className="add-new-btn"
                //onClick={() => history.push('/admin/create-product')}
                >
                    Save Variant
          		</Button>
            </div>
            <Row className="mt-5">
                <Col xl={8}>
                    <div className="dash_activity_card">
                        <h5 className="card-title">General Informations</h5>
                        <hr className="MuiDivider-root" />
                        <div className="card-data-wrapper">
                            <div className="input-area w-50">
                                <Form.Control type="text" placeholder="Variant Name" />
                            </div>
                        </div>
                    </div>

                    <div className="dash_activity_card mt-4">
                        <h5 className="card-title">Pricing</h5>
                        <hr className="MuiDivider-root" />
                        <div className="card-data-wrapper d-flex justify-space-between">
                            <div className="input-area w-50 pr-5">
                                <Form.Control type="number" placeholder="Selling Price override" />
                            </div>
                            <div className="input-area w-50 pl-5">
                                <Form.Control type="number" placeholder="Cost Price override" />
                            </div>
                        </div>
                    </div>
                </Col>
                <Col xl={4}>
                    <div className="dash_activity_card">
                        <h5 className="card-title">Variants</h5>
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