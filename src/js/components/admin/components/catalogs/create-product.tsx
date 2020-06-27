import React from 'react';
import { Button, Table, Row, Col, Form } from "react-bootstrap";
import Select from "react-select";
import { EditorComponent } from 'js/components/common';
import classnames from 'classnames';


export const CreateProduct = () => {


    return (
        <section className="crearte-products-section">
            <div className="generic-page-header">
                <h2 className="page-head my-0">Create Product</h2>
            </div>
            <Row>
                <Col md={8}>
                    <div className="dash_activity_card">
                        <h5 className="card-title">General Informations</h5>
                        <hr className="MuiDivider-root" />
                        <div className="card-data-wrapper">
                            <div className="input-area">
                                <Form.Control type="text" placeholder="Name" />
                            </div>
                        </div>
                        <div className="editor-wrapper">
                            <div className={classnames("editor-outer-wrap")}>
                                <EditorComponent
                                    advertisement
                                    id="description"
                                // content={state.description}
                                // onChange={(content) => handleChange(content, 'description')}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="dash_activity_card mt-4">
                        <h5 className="card-title">Pricing</h5>
                        <hr className="MuiDivider-root" />
                        <div className="card-data-wrapper">
                            <div className="input-area">
                                <Form.Control type="number" placeholder="Price" />
                            </div>
                        </div>
                    </div>

                    <div className="dash_activity_card mt-4">
                        <h5 className="card-title">Search Engine Preview</h5>
                        <hr className="MuiDivider-root" />
                        <div className="card-data-wrapper">
                            <span className="mb-3">Add search engine title and description to make this product easier to find</span>
                            <div className="input-area mt-3">
                                <Form.Control type="text" placeholder="Search Engine Title" />
                            </div>
                            <span className="reminder-text ml-2">If empty, the preview shows what will be autogenerated.</span>

                            <div className="text-area mt-3">
                                <Form.Control type="textarea" placeholder="Search Engine Title" />
                            </div>
                            <span className="reminder-text ml-2">If empty, the preview shows what will be autogenerated.</span>
                        </div>
                    </div>
                </Col>
                <Col md={4}>
                    <div className="dash_activity_card">
                        <h5 className="card-title">Organize Product</h5>
                        <hr className="MuiDivider-root" />
                        <div className="card-data-wrapper">
                            <div className="custom-react-select w-100">
                                <Select
                                    placeholder="Product Type"
                                    className="react-select-container"
                                    classNamePrefix="react-select"
                                //options={BulkActionItems}
                                //styles={styles}
                                // onChange={(e: any) => {
                                //     setBulkAction(e.value);
                                // }}
                                />
                            </div>
                            <hr className="MuiDivider-root" />
                            <div className="custom-react-select w-100">
                                <Select
                                    placeholder="Category"
                                    className="react-select-container"
                                    classNamePrefix="react-select"
                                //options={BulkActionItems}
                                //styles={styles}
                                // onChange={(e: any) => {
                                //     setBulkAction(e.value);
                                // }}
                                />
                            </div>
                            <hr className="MuiDivider-root" />
                            <div className="custom-react-select w-100">
                                <Select
                                    placeholder="Collections"
                                    className="react-select-container"
                                    classNamePrefix="react-select"
                                //options={BulkActionItems}
                                //styles={styles}
                                // onChange={(e: any) => {
                                //     setBulkAction(e.value);
                                // }}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="dash_activity_card mt-4">
                        <h5 className="card-title">Visibility</h5>
                        <hr className="MuiDivider-root" />
                        <div className="card-data-wrapper">
                            <div className="custom-radio-button w-100">
                                <Form.Check
                                    type='radio'
                                    id={`default-1`}
                                    label='Visible'
                                    inline
                                    name="visibility"
                                />
                            </div>
                            <div className="custom-radio-button w-100">
                                <Form.Check
                                    type='radio'
                                    id={`default-2`}
                                    label='Hidden'
                                    inline
                                    name="visibility"
                                />
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </section>
    )
}