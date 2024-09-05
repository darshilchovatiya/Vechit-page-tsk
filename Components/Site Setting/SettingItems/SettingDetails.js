import { useState } from "react";
import { CloseButton } from "reactstrap";

export default function SettingDetails() {
  const [isImageVisible1, setImageVisible1] = useState(true);
  const [isImageVisible2, setImageVisible2] = useState(true);
  const [isImageVisible3, setImageVisible3] = useState(true);

  // const handleCloseClick = () => {
  //   setImageVisible1(false);
  // };
  return (
    <div className="card">
      <h6 className="jdge">Site Details</h6>
      <div className="card-body">
        <div className="row">
          <div className="col-xl-6">
            <div className="mb-3 mb-3">
              <label for="Phone_Number" className="form-label form-label">
                Phone Number{" "}
                <span className="invalid-feedback d-inline">*</span>
              </label>
              <input
                placeholder="Phone Number"
                id="Phone_Number"
                name="contact_no"
                required=""
                type="number"
                className="form-control"
              />
            </div>
          </div>

          <div className="col-xl-6">
            <div className="mb-3 mb-3">
              <label for="Email" className="form-label form-label">
                Email
              </label>
              <input
                id="Email"
                name="email"
                required=""
                type="text"
                className="form-control"
                fdprocessedid="pvznys"
              />
            </div>
          </div>

          <div className="col-xl-4">
            <label for="UpdatePhoto" className="form-label form-label">
              No Image<span className="invalid-feedback d-inline"> *</span>
            </label>
            <div className="siteimg">
              {isImageVisible1 && (
                <div className="siteimgbox">
                  <div className="imgitem">
                    <img src="/sitesetting1.png"></img>
                  </div>
                  <div
                    className="clsbtn"
                    onClick={() => setImageVisible1(false)}
                  >
                    <CloseButton variant="white" />
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="col-xl-4">
            <label for="UpdatePhoto" className="form-label form-label">
              Logo<span className="invalid-feedback d-inline"> *</span>
            </label>
            <div className="siteimg">
              {isImageVisible2 && (
                <div className="siteimgbox">
                  <div className="imgitem">
                    <img src="/sitesetting2.png"></img>
                  </div>
                  <div
                    className="clsbtn"
                    onClick={() => setImageVisible2(false)}
                  >
                    <CloseButton variant="white" />
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="col-xl-4">
            <label for="UpdatePhoto" className="form-label form-label">
              Favicon<span className="invalid-feedback d-inline"> *</span>
            </label>
            <div className="siteimg">
              {isImageVisible3 && (
                <div className="siteimgbox">
                  <div className="imgitem">
                    <img src="/sitesetting1.png"></img>
                  </div>
                  <div
                    className="clsbtn"
                    onClick={() => setImageVisible3(false)}
                  >
                    <CloseButton variant="white" />
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="col-xl-6">
            <div className="mb-3 mb-3">
              <label
                for="enable_notification"
                className="form-label form-label"
              >
                Country
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
                  Select...
                </option>
                <option value="true">United Kingdom</option>
              </select>
            </div>
          </div>

          <div className="col-lg-12">
            <button
              className="btn-dark mt-2 mb-3 btn btn-secondary"
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
