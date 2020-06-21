import { fchmodSync } from "fs";
import React from "react";
import { Button, Modal, InputGroup, FormControl } from "react-bootstrap";

export const Sales = () => {
  return (
    <div className="common_details_container">
      <p className="sales-global-header">Create Sales</p>
      <div className="common_settings_card">
        <div className="common_settings_card_header">
          <p className="common_card_title">General Informations</p>
        </div>
        <hr className="MuiDivider-root" />
        <div className="common_settings_data_container">
          <div className="common_info_name_container">
            <div className="common_info_name">
              <InputGroup
                className="mb-3 input_name common_info_input_pad"
                id="input_field_1"
              >
                <FormControl placeholder="Discount Code" />
              </InputGroup>
            </div>
          </div>
        </div>
      </div>

      <div className="common_settings_card">
        <div className="common_settings_card_header">
          <p className="common_card_title">Discount Type</p>
        </div>
        <hr className="MuiDivider-root" />
        <div className="common_settings_data_container">
          <div className="common_info_name_container">
            <input type="radio" id="male" name="gender" value="male" />
            <label for="male">Fixed Amount</label>
            <br />
            <input type="radio" id="female" name="gender" value="female" />
            <label for="female">Percentage</label>
            <br />
            <input type="radio" id="other" name="gender" value="other" />
            <label for="other">Free Shipping</label>
          </div>
        </div>
      </div>

      <div className="common_settings_card">
        <div className="common_settings_card_header">
          <p className="common_card_title">Active Dates</p>
        </div>
        <hr className="MuiDivider-root" />
        <div className="common_settings_data_container active_dates_data_container">
          <div className="common_date_container">
            <div>
              <InputGroup
                className="mb-3 input_name input_pad"
                id="input_field_1"
              >
                <FormControl placeholder="start date" />
              </InputGroup>
            </div>
            <div>
              <InputGroup
                className="mb-3 input_name input_pad"
                id="input_field_1"
              >
                <FormControl placeholder="start hour" />
              </InputGroup>
            </div>
          </div>
          <div className="common_date_checkbox_data">
            <ul>
              <li>
                <input type="checkbox" />
                <p>set end date</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
