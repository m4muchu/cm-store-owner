import React from 'react';
import Card from './card'
import imga from "./saleordemoproduct_fd_juice_05-thumbnail-255x255.png";


export const Dashboard = () => {
    return (
        <div >
            <Card title="sales" value="$24000" />
            <Card title="Orders" value="12" />

     {/* MINI_REPORT */}

        <div className="minireport_container_main">
      <div className="minireport_inner_container">
        <div className="minireport_data">
          <p className="minireport_text"> Orders are ready to fulfill</p>
        </div>
        <div className="MuiTableCell-root">
          <svg
            className="MuiSvgIcon-root"
            focusable="false"
            viewBox="0 0 24 24"
            aria-hidden="true"
            role="presentation"
          >
            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
          </svg>{" "}
        </div>
      </div>
      <hr className="MuiDivider-root" />
      <div className="minireport_inner_container">
        <div className="minireport_data">
          <p className="minireport_text">274 payments to capture</p>
        </div>
        <div className="MuiTableCell-root">
          <svg
            className="MuiSvgIcon-root"
            focusable="false"
            viewBox="0 0 24 24"
            aria-hidden="true"
            role="presentation"
          >
            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
          </svg>{" "}
        </div>
      </div>
      <hr className="MuiDivider-root" />

      <div className="minireport_inner_container">
        <div className="minireport_data">
          <p className="minireport_text">No products out of stock</p>
        </div>
        <div className="MuiTableCell-root">
          <svg
            className="MuiSvgIcon-root"
            focusable="false"
            viewBox="0 0 24 24"
            aria-hidden="true"
            role="presentation"
          >
            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
          </svg>
        </div>
      </div>
    </div>
         
            {/* ACTIVITY */}
           
            <div className="dash_activity_card">
                <div className="card-body">
                    <h5 className="card-title">Activity</h5>
                    <hr className="MuiDivider-root" />
                    <div>
                        <p className="card-text">Order #1372 was placed.</p>
                        <p className="card-text">3hrs ago.</p>
                    </div>
                </div>
                <div className="card-body">
                    <hr className="MuiDivider-root" />
                    <div>
                        <p className="card-text">Order #1372 was placed.</p>
                        <p className="card-text">3hrs ago.</p>
                    </div>
                </div>

                <div className="card-body">
                    <hr className="MuiDivider-root" />
                    <div>
                        <p className="card-text">Order #1372 was placed.</p>
                        <p className="card-text">3hrs ago.</p>
                    </div>
                </div>
            </div>


            {/*  TOP_PRODUCT */}

            <div className="dash_topproduct_card">
                <h5 className="card-title">Top Products</h5>
                <hr className="MuiDivider-root" />
                <div className="topproduct_data_container">
                    <div className="topproduct_img_container">
                        <img className="topproduct_img" src={imga} alt="" />
                    </div>
                    <div className="topproduct_data">
                        <p className="topproduct_cardcard-text">Carrot juice</p>
                        <p className="topproduct_cardcard-text">500ml</p>
                        <p className="topproduct_cardcard-text">4 ordered</p>
                    </div>
                    <div className="topproduct_data_price">
                        <p>$8.40</p>

                    </div>
                </div>
            </div>
        </div>


    )
} 