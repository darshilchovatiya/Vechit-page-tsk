import { CloseButton } from "reactstrap";

export default function SettingDetails() {
  return (
    <div className="card">
      <h6 className="jdge">Site Details</h6>
      <div className="card-body">
        <div className="row">
          <div class="col-xl-6">
            <div class="mb-3 mb-3">
              <label for="Phone_Number" class="form-label form-label">
                Phone Number <span class="invalid-feedback d-inline">*</span>
              </label>
              <input
                placeholder="Phone Number"
                id="Phone_Number"
                name="contact_no"
                required=""
                type="number"
                class="form-control"
              />
            </div>
          </div>

          <div class="col-xl-6">
            <div class="mb-3 mb-3">
              <label for="Email" class="form-label form-label">
                Email
              </label>
              <input
                id="Email"
                name="email"
                required=""
                type="text"
                class="form-control"
                fdprocessedid="pvznys"
              />
            </div>
          </div>

          <div class="col-xl-4">
            <label for="UpdatePhoto" class="form-label form-label">
              No Image<span class="invalid-feedback d-inline"> *</span>
            </label>
            <div className="siteimg">
              <div className="siteimgbox">
                <div className="imgitem">
                  <img src="/sitesetting1.png"></img>
                </div>
                <div className="clsbtn">
                  <CloseButton variant="white" />
                </div>
              </div>
            </div>
          </div>

          <div class="col-xl-4">
            <label for="UpdatePhoto" class="form-label form-label">
              Logo<span class="invalid-feedback d-inline"> *</span>
            </label>
            <div className="siteimg">
              <div className="siteimgbox">
                <div className="imgitem">
                  <img src="/sitesetting2.png"></img>
                </div>
                <div className="clsbtn">
                  <CloseButton variant="white" />
                </div>
              </div>
            </div>
          </div>

          <div class="col-xl-4">
            <label for="UpdatePhoto" class="form-label form-label">
              Favicon<span class="invalid-feedback d-inline"> *</span>
            </label>
            <div className="siteimg">
              <div className="siteimgbox">
                <div className="imgitem">
                  <img src="/sitesetting1.png"></img>
                </div>
                <div className="clsbtn">
                  <CloseButton variant="white" />
                </div>
              </div>
            </div>
          </div>

          <div class="col-xl-6">
            <div class="mb-3 mb-3">
              <label for="enable_notification" class="form-label form-label">
                Country
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
                  Select...
                </option>
                <option value="true">United Kingdom</option>
              </select>
            </div>
          </div>

          <div class="col-lg-12">
            <button
              class="btn-dark mt-2 mb-3 btn btn-secondary"
              fdprocessedid="kjaj7r"
            >
              Update Site Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
