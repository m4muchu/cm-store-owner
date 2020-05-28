import React from 'react';
import imga from "./images.jpeg";

const TopProducts = () => {
    return (
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
    )
}; export default TopProducts;