import React from 'react';
import { Row, Col } from "react-bootstrap";


export const Configuration = () => {
    return (
        <section className="configuration-section">
            <div className="generic-page-header">
                <h2 className="page-head my-0">Configuration</h2>
            </div>
            <Row className="mt-5">
                <Col lg={12} className="mb-2">
                    <hr className="divider-root mb-4 mt-2" />
                </Col>
                <Col xl={2} className="mb-4">
                    <div className="configuration-sub-head">Attributes and Product Types</div>
                </Col>
                <Col xl={5} className="mb-4">
                    <div className="configuration-card justify-content-sm-start">
                        <div className="configuration-icon mr-2">
                            <img src="/images/admin/global/attribute_icon.svg" alt="" />
                        </div>
                        <div className="configuration-description ml-4">
                            <div className="configuration-card-title-head">Attributes</div>
                            <div className="configuration-card-sub-title pt-1">Determine attributes used to create product types</div>
                        </div>
                    </div>
                </Col>
                <Col xl={5} className="mb-4">
                    <div className="configuration-card justify-content-sm-start">
                        <div className="configuration-icon mr-2">
                            <img src="/images/admin/global/product_icon.svg" alt="" />
                        </div>
                        <div className="configuration-description ml-4">
                            <div className="configuration-card-title-head">Product Types</div>
                            <div className="configuration-card-sub-title pt-1">Define types of products you sell</div>
                        </div>
                    </div>
                </Col>
                <Col lg={12} className="mt-4">
                    <hr className="divider-root mb-4 mt-2" />
                </Col>
                <Col xl={2} className="mb-4">
                    <div className="configuration-sub-head">Shipping Settings</div>
                </Col>
                <Col xl={5} className="mb-4">
                    <div className="configuration-card justify-content-sm-start">
                        <div className="configuration-icon mr-2">
                            <img src="/images/admin/global/shopping_icon.svg" alt="" />
                        </div>
                        <div className="configuration-description ml-4">
                            <div className="configuration-card-title-head">Shipping Methods</div>
                            <div className="configuration-card-sub-title pt-1">Manage how you ship out orders</div>
                        </div>
                    </div>
                </Col>
                <Col xl={5} className="mb-4">
                    <div className="configuration-card justify-content-sm-start">
                        <div className="configuration-icon mr-2">
                            <img src="/images/admin/global/warehouse_icon.svg" alt="" />
                        </div>
                        <div className="configuration-description ml-4">
                            <div className="configuration-card-title-head">Warehouses</div>
                            <div className="configuration-card-sub-title pt-1">Manage and update your warehouse information</div>
                        </div>
                    </div>
                </Col>
            </Row>
        </section>
    )
}