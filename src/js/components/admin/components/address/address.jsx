import React from "react";
import { Button, Modal, InputGroup, FormControl } from "react-bootstrap";

export const Address = () => {
  return (
    <div className="common_details_container">
      <div className="address_block_flex_container">
        <div className="customer_card address_left_card">
          <div className="customer_card_header ">
            <p className="customer_card_title custom_pad_adjust">
              admin@example.com
            </p>
            <span className="mebership_details">
              Active member since Dec 2019
            </span>
          </div>
          <hr className="MuiDivider-root horizontal_line_pad" />
          <ul className="customer-checkbox-container">
            <li>
              <input type="checkbox" />
              <p>User account active</p>
            </li>
          </ul>
          <InputGroup
            className="mb-3 input_name input_pad admin_note"
            id="input_field_1"
          >
            <FormControl className=" admin_note" placeholder="Note" />
          </InputGroup>
        </div>

        <div className="customer_card">
          <div className="common_settings_card_header">
            <p className="common_card_title">Address Information</p>
            <p className="address_management">MANAGE</p>
          </div>
          <hr className="MuiDivider-root horizontal_line_pad" />
          <div className="address_data_container">
            <p className="address_header">Address</p>
            <div className="customer_address_container">
              <p>lorem ipsum</p>
              <p>lorem ipsum</p>
              <p>435</p>
              <p>lorem ipsum</p>
              <p>United States of America</p>
            </div>
          </div>
        </div>
      </div>

      <div className="address_block_flex_container">
        <div className="customer_card address_left_card">
          <div className="personal_info_card_header">
            <p className="personal_info_card_title">Personal Informations</p>
          </div>
          <hr className="MuiDivider-root horizontal_line_pad" />
          <p className="general_info_header">General Informations</p>
          <div className="personal_info_data_container active_dates_data_container">
            <div className="personal_info_date_container">
              <InputGroup
                className="mb-3 input_name input_pad"
                id="input_field_1"
              >
                <FormControl placeholder="First name" />
              </InputGroup>
              <InputGroup
                className="mb-3 input_name input_pad"
                id="input_field_1"
              >
                <FormControl placeholder="Last name" />
              </InputGroup>
            </div>
            <p className="contact_info_header">Contact information</p>
            <InputGroup
              className="mb-3 input_name input_pad"
              id="input_field_1"
            >
              <FormControl placeholder="admin@example.com" />
            </InputGroup>
          </div>
        </div>

        <div className="customer_card">
          <div className="common_settings_card_header">
            <p className="common_card_title">Customer History</p>
          </div>
          <hr className="MuiDivider-root horizontal_line_pad" />
          <div className="common_settings_data_container">
            <span>Last Login</span>
            <p>20 hours ago</p>
            <hr className="MuiDivider-root horizontal_line_pad" />
            <span>Last Order</span>
            <p>6 months ago</p>
          </div>
        </div>
      </div>

      <div className="customer_card address_left_card order_list_card">
        <div className="customer_card_header ">
          <p className="customer_card_title ">Recent Orders</p>
        </div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">No. of Order</th>
              <th scope="col">Date</th>
              <th scope="col">Status</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>3 month ago</td>
              <td>fully paid</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>fully paid</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>4 month ago</td>

              <td >fully paid</td>
              <td>@twitter</td>
            </tr>

            <tr>
              <th scope="row">4</th>
              <td>6 month ago</td>

              <td >Unpaid</td>
              <td>@twitter</td>
            </tr>

            <tr>
              <th scope="row">5</th>
              <td>6 month ago</td>

              <td >fully paid</td>
              <td>@twitter</td>
            </tr>
            <tr>
              <th scope="row">6</th>
              <td>6 month ago</td>

              <td >Upaid</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
