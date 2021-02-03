import React from 'react';
import { Button, Row, Col, Form } from 'react-bootstrap';

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
          <div className="dashboard-activity-card">
            <h5 className="card-title">General Informations</h5>
            <hr className="MuiDivider-root" />
            <div className="card-data-wrapper">
              <div className="input-area w-50">
                <Form.Control type="text" placeholder="Variant Name" />
              </div>
            </div>
          </div>
          <div className="dashboard-activity-card mt-4">
            <h5 className="card-title">Pricing</h5>
            <hr className="MuiDivider-root" />
            <div className="card-data-wrapper d-flex justify-space-between">
              <div className="input-area w-50 pr-5">
                <Form.Label>Selling Price Override</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Selling Price override"
                />
              </div>
              <div className="input-area w-50 pl-5">
                <Form.Label>Cost Price override</Form.Label>
                <Form.Control type="number" placeholder="Cost Price override" />
              </div>
            </div>
          </div>
          <div className="dashboard-activity-card mt-4">
            <h5 className="card-title">Inventory</h5>
            <hr className="MuiDivider-root" />
            <div className="card-data-wrapper d-flex justify-space-between">
              <div className="input-area w-50 pr-5">
                <Form.Label>SKU(Stock Keeping Unit)</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Selling Price override"
                />
              </div>
              <div className="input-area w-50 pl-5">
                <Form.Label>Inventory Stock</Form.Label>
                <Form.Control type="number" placeholder="Inventory Stock" />
              </div>
            </div>
          </div>
        </Col>
        <Col xl={4}>
          <div className="dashboard-activity-card">
            <h5 className="card-title">Variants</h5>
            <hr className="MuiDivider-root" />
            <div className="card-data-wrapper"></div>
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
  );
};
