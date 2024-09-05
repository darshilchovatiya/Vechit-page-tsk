import { useState } from "react";
import { CloseButton } from "reactstrap";

export default function CustomerDetails() {
  const [isImageVisible, setImageVisible] = useState(true);

  return (
    <div className="card">
      <div className="card-body">
        <div className="row">
          <div className="col-xl-6">
            <div className="update-name">
              <label for="First_Name" className="form-label form-label">
                First Name <span className="invalid-feedback d-inline">*</span>
              </label>
              <input
                placeholder="First Name"
                id="First_Name"
                name="first_name"
                type="text"
                className="form-control"
                fdprocessedid="0vs4y"
              ></input>
            </div>
          </div>

          <div className="col-xl-6">
            <div className="mb-3 mb-3">
              <label for="Last_Name" className="form-label form-label">
                Last Name <span className="invalid-feedback d-inline">*</span>
              </label>
              <input
                placeholder="Last Name"
                id="Last_Name"
                name="last_name"
                type="text"
                className="form-control"
                fdprocessedid="eguhok"
              />
            </div>
          </div>

          <div className="col-xl-6">
            <div className="mb-3 mb-3">
              <label for="Phone_Number" className="form-label form-label">
                Phone Number{" "}
                <span className="invalid-feedback d-inline">*</span>
              </label>
              <input
                placeholder="Phone Number"
                id="Phone_Number"
                name="phone_number"
                type="number"
                className="is-valid form-control"
                aria-invalid="false"
                // value="7822031221"
                fdprocessedid="8newv8"
              />
              <div className="invalid-feedback"></div>
            </div>
          </div>

          <div className="col-xl-6">
            <div className="mb-3 mb-3">
              <label for="Email" className="form-label form-label">
                Email
              </label>
              <input
                placeholder="Email"
                id="Email"
                name="email"
                type="text"
                className="is-valid form-control"
                aria-invalid="false"
                fdprocessedid="5dtsjg"
              />
              <div className="invalid-feedback"></div>
            </div>
          </div>

          <div className="col-xl-12">
            <div className="mb-3 mb-3">
              <label for="description" className="form-label form-label">
                Description <span className="invalid-feedback d-inline">*</span>
              </label>
              <textarea
                placeholder="Description"
                id="description"
                name="description"
                className="form-control"
              >
                I’m Darshil
              </textarea>
            </div>
          </div>

          <div className="col-xl-6">
            <div className="mb-3 mb-3">
              <label for="gender" className="form-label form-label">
                Gender <span className="invalid-feedback d-inline">*</span>
              </label>
              <select
                id="gender"
                name="gender"
                className="form-control"
                fdprocessedid="tcm4xr"
              >
                <option value="" disabled="">
                  Select Gender
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
          </div>

          <div className="col-xl-6">
            <div className="mb-3 mb-3">
              <label for="date_of_birth" className="form-label form-label">
                Date Of Birth{" "}
                <span className="invalid-feedback d-inline">*</span>
              </label>
              <input
                id="date_of_birth"
                name="date_of_birth"
                placeholder="date placeholder"
                type="date"
                className="form-control"
                // value="1996-08-14"
              />
            </div>
          </div>

          <div className="col-xl-12">
            <label for="UpdatePhoto" className="form-label form-label">
              Update Photo<span className="invalid-feedback d-inline"> *</span>
            </label>
            <div className="updateimg">
              {isImageVisible && (
                <div className="imgbox">
                  <div className="imgitem">
                    <img src="/custdet1.jpeg"></img>
                  </div>
                  <div
                    className="clsbtn"
                    onClick={() => setImageVisible(false)}
                  >
                    <CloseButton variant="white" />
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="col-xl-6">
            <div className="mb-3 mb-3">
              <label for="user_name" className="form-label form-label">
                User Name <span className="invalid-feedback d-inline">*</span>
              </label>
              <input
                placeholder="User Name"
                id="user_name"
                disabled="true"
                name="user_name"
                type="text"
                className="form-control"
                value="darshil330"
                fdprocessedid="eq4qht"
              />
            </div>
          </div>
          <div className="col-xl-1">
            <div className="mb-3 mb-3">
              <label for="customer_follow" className="form-label form-label">
                Following <span className="invalid-feedback d-inline">*</span>
              </label>
              <input
                placeholder="User Name"
                id="customer_follow"
                disabled="true"
                name="customer_follow"
                type="text"
                className="form-control"
                value="1"
                fdprocessedid="eazs1p"
              />
            </div>
          </div>
          <div className="col-xl-1">
            <div className="mb-3 mb-3">
              <label for="customer_follow" className="form-label form-label">
                Followers <span className="invalid-feedback d-inline">*</span>
              </label>
              <input
                placeholder="User Name"
                id="customer_follow"
                disabled="true"
                name="customer_follow"
                type="text"
                className="form-control"
                value="1"
                fdprocessedid="t7gbq"
              />
            </div>
          </div>
          <div className="col-xl-6">
            <div className="mb-3 mb-3">
              <label for="item_limit" className="form-label form-label">
                Item Limit <span className="invalid-feedback d-inline">*</span>
              </label>
              <input
                placeholder="Item Limit"
                id="item_limit"
                name="item_limit"
                type="text"
                className="form-control"
                // value="200"
                fdprocessedid="qwdxm9"
              />
            </div>
          </div>
          <div className="col-xl-6">
            <div className="mb-3 mb-3">
              <label for="withdrawal_limit" className="form-label form-label">
                Withdrawal Limit{" "}
                <span className="invalid-feedback d-inline">*</span>
              </label>
              <input
                placeholder="Withdrawal Limit"
                id="withdrawal_limit"
                disabled="true"
                name="withdrawal_limit"
                type="number"
                className="form-control"
                value="10"
                fdprocessedid="nkgig"
              />
            </div>
          </div>
          <div className="col-xl-6">
            <div className="mb-3 mb-3">
              <label for="holiday_mode" className="form-label form-label">
                Holiday Mode{" "}
                <span className="invalid-feedback d-inline">*</span>
              </label>
              <select
                placeholder="Holiday Mode"
                id="holiday_mode"
                name="holiday_mode"
                className="form-control"
                fdprocessedid="76ddg5"
              >
                <option value="" disabled="">
                  select status
                </option>
                <option value="true">true</option>
                <option value="false">false</option>
              </select>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="mb-3 mb-3">
              <label for="walletId" className="form-label form-label">
                Wallet Id <span className="invalid-feedback d-inline">*</span>
              </label>
              <input
                placeholder="Wallet Id"
                id="walletId"
                disabled="true"
                name="walletId"
                type="text"
                className="form-control"
                value="wlt_m_01J57NG7MQ1NZHNYADZB90GZFZ"
                fdprocessedid="0yvx4j"
              />
            </div>
          </div>
          <div className="col-xl-6">
            <div className="mb-3 mb-3">
              <label for="mangoPayUserId" className="form-label form-label">
                MangoPay User Id{" "}
                <span className="invalid-feedback d-inline">*</span>
              </label>
              <input
                placeholder="MangoPay User Id"
                id="mangoPayUserId"
                disabled="true"
                name="mangoPayUserId"
                type="text"
                className="form-control"
                value="user_m_01J57NG7HDEJVFT5PB42Q0XJ4B"
                fdprocessedid="1sjds6"
              />
            </div>
          </div>
          <div className="col-xl-6">
            <div className="mb-3 mb-3">
              <label for="average_ratting" className="form-label form-label">
                Customer Rating{" "}
                <span className="invalid-feedback d-inline">*</span>
              </label>
              <input
                placeholder="Average Rating"
                id="average_ratting"
                disabled="true"
                name="average_ratting"
                type="number"
                className="form-control"
                value="0"
                fdprocessedid="km5e2"
              />
            </div>
          </div>
          <div className="col-xl-6">
            <div className="mb-3 mb-3">
              <label for="item_count" className="form-label form-label">
                Item Count <span className="invalid-feedback d-inline">*</span>
              </label>
              <input
                placeholder="Item Count"
                id="item_count"
                disabled="true"
                name="item_count"
                type="number"
                className="form-control"
                value="3"
                fdprocessedid="mldpbwu"
              />
            </div>
          </div>
          <div className="col-xl-6">
            <div className="mb-3 mb-3">
              <label
                for="enable_notification"
                className="form-label form-label"
              >
                Enable Notification{" "}
                <span className="invalid-feedback d-inline">*</span>
              </label>
              <select
                placeholder="Enable Notification"
                id="enable_notification"
                name="enable_notification"
                className="form-control"
                fdprocessedid="f3y2o"
              >
                <option value="" disabled="">
                  select status
                </option>
                <option value="true">true</option>
                <option value="false">false</option>
              </select>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="mb-3 mb-3">
              <label for="status" className="form-label form-label">
                Status <span className="invalid-feedback d-inline">*</span>
              </label>
              <select
                id="status"
                name="status"
                className="form-control"
                fdprocessedid="62twhd"
              >
                <option value="" disabled="">
                  select status
                </option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
                <option value="Block">Block</option>
                <option value="Delete">Delete</option>
              </select>
            </div>
          </div>
          <div className="col-lg-12">
            <button
              className="btn-dark mt-2 mb-3 btn btn-secondary"
              fdprocessedid="v6wxtn"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
