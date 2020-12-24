import React from "react";
import { InputGroup, FormControl } from "react-bootstrap";

export const CreateVoucher = () => {
  return (
    <div className="common_details_container">
      <p className="voucher-global-header">Create Voucher</p>
      <div className="common_settings_card">
        <div className="common_settings_card_header">
          <p className="common_card_title">General Informations</p>
          <p className="generate-info">GENERATE CODE</p>
        </div>
        <hr className="MuiDivider-root" />
        <div className="common_settings_data_container">
          <div className="common_info_name_container">
            <div className="common_info_name">
              <InputGroup className="mb-3 input_name common_info_input_pad" id="input_field_1">
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
          <p className="common_card_title">value</p>
        </div>
        <hr className="MuiDivider-root" />
        <div className="common_settings_data_container">
          <div className="common_info_name_container">
            <div className="common_info_name">
              <InputGroup className="mb-3 input_name common_info_input_pad" id="input_field_1">
                <FormControl placeholder="Discount Value" />
              </InputGroup>
            </div>
            <hr className="MuiDivider-root" />
            <div className="common_flex_row_data">
              <ul className="value_checkbox">
                <li>
                  <input type="checkbox" />
                  <p>
                    Only once per order <br />
                    <span>
                      If this option is disabled, discount will be counted for
                      every eligible product
                    </span>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="common_settings_card">
        <div className="common_settings_card_header">
          <p className="common_card_title">Minimum Requirements</p>
        </div>
        <hr className="MuiDivider-root" />
        <div className="common_settings_data_container">
          <div className="common_info_name_container">
            <input type="radio" id="male" name="gender" value="male" />
            <label for="male">None</label>
            <br />
            <input type="radio" id="female" name="gender" value="female" />
            <label for="female">Minimal order value</label>
            <br />
            <input type="radio" id="other" name="gender" value="other" />
            <label for="other">Minimum quantity of items</label>
          </div>
        </div>
        <InputGroup className="mb-3 input_name input_pad" id="input_field_1">
          <FormControl placeholder="Minimum Quantity of items" />
        </InputGroup>
      </div>

      <div className="common_settings_card">
        <div className="common_settings_card_header">
          <p className="common_card_title">Active Dates</p>
        </div>
        <hr className="MuiDivider-root" />
        <div className="common_settings_data_container active_dates_data_container">
          <div className="common_date_container">
            <InputGroup className="mb-3 input_name input_pad" id="input_field_1">
              <FormControl placeholder="start date" />
            </InputGroup>
            <InputGroup className="mb-3 input_name input_pad" id="input_field_1">
              <FormControl placeholder="start hour" />
            </InputGroup>
          </div>
          <div className="general_info_input_pad">
            <ul className="common_date_checkbox_data">
              <li>
                <input type="checkbox" />
                <p>set end date</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="common_settings_card">
        <div className="common_settings_card_header">
          <p className="common_card_title">Usage Limit</p>
        </div>
        <hr className="MuiDivider-root" />
        <div className="common_settings_data_container">
          <div className=" common_flex_row_data usage_limit_container">
            <ul>
              <li>
                <input type="checkbox" />
                <p>Limit number of times this discount can be used in total</p>
              </li>
              <li>
                <input type="checkbox" />
                <p>Limit to one use per customer</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

     
    </div>
  );
};
