import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function MyVerticallyCenteredModal(props) {
  const [gDeatils, setGdetails] = useState({});

  const HandleChange = (e) => {
    setGdetails({
      ...gDeatils,
      [e.target.name]: e.target.value,
    });
  };
  const sendData = () => {
    props.pcallBack(gDeatils);
    console.log("dae", gDeatils);
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          General Informations
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <input
          className="col-lg-12 mb-3 product__InfoFieldsContainer"
          placeholder="variant name"
          name="name"
          onChange={HandleChange}
        ></input>
        <div>
          <div className="container">
            <div className="row product__InfoFieldsContainer ">
              <div className="col-lg-6 mb-3 product__InfoFields">
                <p>Selling Price Override</p>
                <input
                  className=" mb-3"
                  placeholder="cost price override"
                  name="spo"
                  onChange={HandleChange}
                ></input>
              </div>
              <div className="col-lg-6 mb-3 product__InfoFields">
                <p>Cost Price Override</p>
                <input
                  className=" mb-3"
                  placeholder="cost price override"
                  name="cpo"
                  onChange={HandleChange}
                ></input>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="container">
            <div className="row product__InfoFieldsContainer ">
              <div className="col-lg-6 mb-3 product__InfoFields">
                <p>SKU(Stock Keeping Unit)</p>
                <input
                  placeholder="selling price override"
                  name="sku"
                  onChange={HandleChange}
                ></input>
              </div>
              <div className="col-lg-6 mb-3 product__InfoFields">
                <p>Inventory Stock</p>
                <input
                  placeholder="Inventory stock"
                  name="istock"
                  onChange={HandleChange}
                ></input>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button onClick={sendData}>Submit</button>
      </Modal.Footer>
    </Modal>
  );
}
export default MyVerticallyCenteredModal;
