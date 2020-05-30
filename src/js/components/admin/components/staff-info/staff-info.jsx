import React, { useState } from "react";
import { Button, Modal, InputGroup, FormControl } from "react-bootstrap";
import imga from "./saleordemoproduct_fd_juice_05-thumbnail-255x255.png";

export default function StaffInfo() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="admin_details_container">
      <div className="admin_settings_card">
        <h5 className="card-title">Staff member info</h5>
        <hr className="MuiDivider-root" />
        <div className="admin_settings_data_container">
          <div className="admin_settings_img_container">
            <img className="admin_settings_img" src={imga} alt="" />
          </div>
          <div className="staff_info_name_container">
            <div className="staff_info_name">
              <InputGroup className="mb-3 input_name" id="input_field_1">
                <FormControl placeholder="Firstname" />
              </InputGroup>
              <InputGroup className="mb-3 input_name" id="input_field_2">
                <FormControl placeholder="Lastname" />
              </InputGroup>
            </div>
            <InputGroup className="mb-3 input_name" id="input_field_3">
              <FormControl placeholder="admin@example.com" />
            </InputGroup>
          </div>
        </div>
      </div>

      <div className="admin_settings_card password_card">
        <div className="form_password_cotainer">
          <h5 className="card-title">password</h5>
          <p onClick={handleShow}>change your password</p>
        </div>
        <hr className="MuiDivider-root" />
        <div className="password_warning">
          <p>
            You should change your password every month to avoid security
            issues.
          </p>
        </div>

        <div classNAme="modal_container">
          <div
            class="modal fade"
            id="exampleModalCenter"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLongTitle">
                    Modal title
                  </h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">...</div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" class="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <Modal className="moda" show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Change Password</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {" "}
              <InputGroup className="mb-3">
                <FormControl
                  placeholder="Previous Password"
                  aria-label="Previous Password"
                  aria-describedby="basic-addon2"
                />
              </InputGroup>
              <InputGroup>
                <FormControl
                  placeholder="New Password"
                  aria-label="New Password"
                  aria-describedby="basic-addon2"
                />
              </InputGroup>
              <span className="password_instructions">
                New password must be at least 8 characters long
              </span>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
      <footer>
        <button className="back-button">BACK</button>
        <button className="save-button">SAVE</button>
      </footer>
    </div>
  );
}
