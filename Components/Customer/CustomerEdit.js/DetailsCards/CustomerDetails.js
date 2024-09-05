import { CloseButton } from "reactstrap";

export default function CustomerDetails() {
  return (
    <div className="card">
      <div className="card-body">
        <div className="row">
          <div className="col-xl-6">
            <div className="update-name">
              <label for="First_Name" class="form-label form-label">
                First Name <span class="invalid-feedback d-inline">*</span>
              </label>
              <input
                placeholder="First Name"
                id="First_Name"
                name="first_name"
                type="text"
                class="form-control"
                fdprocessedid="0vs4y"
              ></input>
            </div>
          </div>

          <div class="col-xl-6">
            <div class="mb-3 mb-3">
              <label for="Last_Name" class="form-label form-label">
                Last Name <span class="invalid-feedback d-inline">*</span>
              </label>
              <input
                placeholder="Last Name"
                id="Last_Name"
                name="last_name"
                type="text"
                class="form-control"
                fdprocessedid="eguhok"
              />
            </div>
          </div>

          <div class="col-xl-6">
            <div class="mb-3 mb-3">
              <label for="Phone_Number" class="form-label form-label">
                Phone Number <span class="invalid-feedback d-inline">*</span>
              </label>
              <input
                placeholder="Phone Number"
                id="Phone_Number"
                name="phone_number"
                type="number"
                class="is-valid form-control"
                aria-invalid="false"
                // value="7822031221"
                fdprocessedid="8newv8"
              />
              <div class="invalid-feedback"></div>
            </div>
          </div>

          <div class="col-xl-6">
            <div class="mb-3 mb-3">
              <label for="Email" class="form-label form-label">
                Email
              </label>
              <input
                placeholder="Email"
                id="Email"
                name="email"
                type="text"
                class="is-valid form-control"
                aria-invalid="false"
                // value="darshil@itservicesindia.com"
                fdprocessedid="5dtsjg"
              />
              <div class="invalid-feedback"></div>
            </div>
          </div>

          <div class="col-xl-12">
            <div class="mb-3 mb-3">
              <label for="description" class="form-label form-label">
                Description <span class="invalid-feedback d-inline">*</span>
              </label>
              <textarea
                placeholder="Description"
                id="description"
                name="description"
                class="form-control"
              >
                I’m Darshil
              </textarea>
            </div>
          </div>

          <div class="col-xl-6">
            <div class="mb-3 mb-3">
              <label for="gender" class="form-label form-label">
                Gender <span class="invalid-feedback d-inline">*</span>
              </label>
              <select
                id="gender"
                name="gender"
                class="form-control"
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

          <div class="col-xl-6">
            <div class="mb-3 mb-3">
              <label for="date_of_birth" class="form-label form-label">
                Date Of Birth <span class="invalid-feedback d-inline">*</span>
              </label>
              <input
                id="date_of_birth"
                name="date_of_birth"
                placeholder="date placeholder"
                type="date"
                class="form-control"
                // value="1996-08-14"
              />
            </div>
          </div>

          <div class="col-xl-12">
            <label for="UpdatePhoto" class="form-label form-label">
              Update Photo<span class="invalid-feedback d-inline"> *</span>
            </label>
            <div className="updateimg">
              <div className="imgbox">
                <div className="imgitem">
                  <img src="/custdet1.jpeg"></img>
                </div>
                <div className="clsbtn">
                  <CloseButton variant="white" />
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-6">
            <div class="mb-3 mb-3">
              <label for="user_name" class="form-label form-label">
                User Name <span class="invalid-feedback d-inline">*</span>
              </label>
              <input
                placeholder="User Name"
                id="user_name"
                disabled="true"
                name="user_name"
                type="text"
                class="form-control"
                value="darshil330"
                fdprocessedid="eq4qht"
              />
            </div>
          </div>
          <div class="col-xl-1">
            <div class="mb-3 mb-3">
              <label for="customer_follow" class="form-label form-label">
                Following <span class="invalid-feedback d-inline">*</span>
              </label>
              <input
                placeholder="User Name"
                id="customer_follow"
                disabled="true"
                name="customer_follow"
                type="text"
                class="form-control"
                value="1"
                fdprocessedid="eazs1p"
              />
            </div>
          </div>
          <div class="col-xl-1">
            <div class="mb-3 mb-3">
              <label for="customer_follow" class="form-label form-label">
                Followers <span class="invalid-feedback d-inline">*</span>
              </label>
              <input
                placeholder="User Name"
                id="customer_follow"
                disabled="true"
                name="customer_follow"
                type="text"
                class="form-control"
                value="1"
                fdprocessedid="t7gbq"
              />
            </div>
          </div>
          <div class="col-xl-6">
            <div class="mb-3 mb-3">
              <label for="item_limit" class="form-label form-label">
                Item Limit <span class="invalid-feedback d-inline">*</span>
              </label>
              <input
                placeholder="Item Limit"
                id="item_limit"
                name="item_limit"
                type="text"
                class="form-control"
                // value="200"
                fdprocessedid="qwdxm9"
              />
            </div>
          </div>
          <div class="col-xl-6">
            <div class="mb-3 mb-3">
              <label for="withdrawal_limit" class="form-label form-label">
                Withdrawal Limit{" "}
                <span class="invalid-feedback d-inline">*</span>
              </label>
              <input
                placeholder="Withdrawal Limit"
                id="withdrawal_limit"
                disabled="true"
                name="withdrawal_limit"
                type="number"
                class="form-control"
                value="10"
                fdprocessedid="nkgig"
              />
            </div>
          </div>
          <div class="col-xl-6">
            <div class="mb-3 mb-3">
              <label for="holiday_mode" class="form-label form-label">
                Holiday Mode <span class="invalid-feedback d-inline">*</span>
              </label>
              <select
                placeholder="Holiday Mode"
                id="holiday_mode"
                name="holiday_mode"
                class="form-control"
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
          <div class="col-xl-6">
            <div class="mb-3 mb-3">
              <label for="walletId" class="form-label form-label">
                Wallet Id <span class="invalid-feedback d-inline">*</span>
              </label>
              <input
                placeholder="Wallet Id"
                id="walletId"
                disabled="true"
                name="walletId"
                type="text"
                class="form-control"
                value="wlt_m_01J57NG7MQ1NZHNYADZB90GZFZ"
                fdprocessedid="0yvx4j"
              />
            </div>
          </div>
          <div class="col-xl-6">
            <div class="mb-3 mb-3">
              <label for="mangoPayUserId" class="form-label form-label">
                MangoPay User Id{" "}
                <span class="invalid-feedback d-inline">*</span>
              </label>
              <input
                placeholder="MangoPay User Id"
                id="mangoPayUserId"
                disabled="true"
                name="mangoPayUserId"
                type="text"
                class="form-control"
                value="user_m_01J57NG7HDEJVFT5PB42Q0XJ4B"
                fdprocessedid="1sjds6"
              />
            </div>
          </div>
          <div class="col-xl-6">
            <div class="mb-3 mb-3">
              <label for="average_ratting" class="form-label form-label">
                Customer Rating <span class="invalid-feedback d-inline">*</span>
              </label>
              <input
                placeholder="Average Rating"
                id="average_ratting"
                disabled="true"
                name="average_ratting"
                type="number"
                class="form-control"
                value="0"
                fdprocessedid="km5e2"
              />
            </div>
          </div>
          <div class="col-xl-6">
            <div class="mb-3 mb-3">
              <label for="item_count" class="form-label form-label">
                Item Count <span class="invalid-feedback d-inline">*</span>
              </label>
              <input
                placeholder="Item Count"
                id="item_count"
                disabled="true"
                name="item_count"
                type="number"
                class="form-control"
                value="3"
                fdprocessedid="mldpbwu"
              />
            </div>
          </div>
          <div class="col-xl-6">
            <div class="mb-3 mb-3">
              <label for="enable_notification" class="form-label form-label">
                Enable Notification{" "}
                <span class="invalid-feedback d-inline">*</span>
              </label>
              <select
                placeholder="Enable Notification"
                id="enable_notification"
                name="enable_notification"
                class="form-control"
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
          <div class="col-xl-6">
            <div class="mb-3 mb-3">
              <label for="status" class="form-label form-label">
                Status <span class="invalid-feedback d-inline">*</span>
              </label>
              <select
                id="status"
                name="status"
                class="form-control"
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
          <div class="col-lg-12">
            <button
              class="btn-dark mt-2 mb-3 btn btn-secondary"
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
