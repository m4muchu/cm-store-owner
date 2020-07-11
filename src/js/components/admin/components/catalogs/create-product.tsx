import React from 'react';
import { Button, Table, Row, Col, Form } from "react-bootstrap";
import Select from "react-select";
import { EditorComponent, FileUploadComponent, ImageSortable } from 'js/components/common';
import classnames from 'classnames';
import { history } from 'js/helpers';


export const CreateProduct = () => {

    return (
        <section className="crearte-products-section">
            <div className="generic-page-header">
                <h2 className="page-head my-0">Create Product</h2>
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
                        <div className="d-flex justify-content-between">
                            <h5 className="card-title">Images</h5>
                        </div>
                        <hr className="MuiDivider-root" />
                        <div className="card-data-wrapper">
                            <div className="upload-photo-wrap">
                                <div className="photo-uploader">
                                    <FileUploadComponent
                                        entity_type='TripMedia'
                                        multiple={true}
                                        max={10}
                                        accepted={['image/*']}
                                    // onSuccess={props.onAddNewFiles}
                                    />
                                </div>
                                <ImageSortable files={[{ attachment_url: 'https://picsum.photos/200/300' }, { attachment_url: 'https://picsum.photos/200/200' }, { attachment_url: 'https://picsum.photos/200/204' }]} />
                                <div className="drag-drop-text">
                                    <h4>
                                        <img src="/images/admin/global/arrow.svg" alt="" />
                                        Drag and drop photos to best represent your listing.
                                    </h4>
                                </div>
                                <div className="drag-drop-text">
                                    <h4>
                                        <img src="/images/admin/global/info.svg" alt="" />
                                        You can only add upto 10 files at a time, max Size of file should be less than 2mb
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="dash_activity_card mt-4">
                        <h5 className="card-title">Attributes</h5>
                        <hr className="MuiDivider-root" />
                        <div className="card-data-wrapper">
                            <div className="attributes-wrapper d-flex justify-content-between align-items-center">
                                <div className="text-area-attributes">
                                    <span className="mb-3">Material</span>
                                </div>
                                <div className="custom-react-select w-50">
                                    <Select
                                        placeholder="Type"
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
                    </div>

                    <div className="dash_activity_card mt-4">
                        <h5 className="card-title">Pricing</h5>
                        <div className="cm-admin-checkbox card-sub-title">
                            <Form.Check
                                type="checkbox"
                                id="tt-check-lead-select-all"
                                className="cc-checkbox"
                                // onChange={(e) => selectAll(e.target.checked)}
                                // checked={state.select_all ? state.select_all : false}
                                label="Charge taxes for this item"
                            />
                        </div>
                        <hr className="MuiDivider-root" />
                        <div className="card-data-wrapper">
                            <div className="input-area w-50">
                                <Form.Control type="number" placeholder="Price" />
                            </div>
                        </div>
                    </div>

                    <div className="dash_activity_card mt-4">
                        <div className="d-flex justify-content-between">
                            <h5 className="card-title">Variants</h5>
                            <span className="card-title-right text-uppercase" onClick={() => history.push('/admin/create-variant')}>Create Variants</span>
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
                                                <th>Variant</th>
                                                <th>SKU</th>
                                                <th>Price</th>
                                                <th>Inventory</th>
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
                            <span className="reminder-text ml-2 mt-1">If empty, the preview shows what will be autogenerated.</span>
      
                                <div className="input-area mt-3">
                                    <Form.Control
                                        as="textarea"
                                        rows={3}
                                        placeholder="Note"
                                    />
                                </div>
                        
                            <span className="reminder-text ml-2">If empty, the preview shows what will be autogenerated.</span>
                        </div>
                    </div>
                </Col>
                <Col xl={4}>
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
                            <div className="custom-radio-button w-100 mt-3">
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