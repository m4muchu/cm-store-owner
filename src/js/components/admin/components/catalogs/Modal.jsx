import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function MyVerticallyCenteredModal(props) {
  const [genDetails, setGenDetails] = useState({});

  const HandleChange = (e) => {
    setGenDetails({
      ...genDetails,
      [e.target.name]: e.target.value,
    });
  };
  const sendData = () => {
    props.modelCallBack(genDetails);
    console.log("dae", genDetails);
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
        <p>Name</p>

        <input
          className="col-lg-12 mb-3 product__InfoFieldsContainer form-control"
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
                  className=" mb-3 form-control"
                  placeholder="cost price override"
                  name="spo"
                  onChange={HandleChange}
                ></input>
              </div>
              <div className="col-lg-6 mb-3 product__InfoFields">
                <p>Cost Price Override</p>
                <input
                  className=" mb-3 form-control"
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
                  className=" form-control"
                  name="sku"
                  onChange={HandleChange}
                ></input>
              </div>
              <div className="col-lg-6 mb-3 product__InfoFields">
                <p>Inventory Stock</p>
                <input
                  className=" mb-3 form-control"
                  placeholder="Inventory stock"
                  name="istock"
                  onChange={HandleChange}
                ></input>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer className="productInfo__footer">
        <button className=" productInfo__button" onClick={sendData}>
          Submit
        </button>
      </Modal.Footer>
    </Modal>
  );
}
export default MyVerticallyCenteredModal;
