import { useRouter } from "next/router";
import React from "react";
import { Button } from "reactstrap";

export default function MyProfile() {
  const router = useRouter();

  return (
    <>
      <div className="row">
        <div className="col-xl-12">
          <div className="sc-fb9f1326-0 TnemY d-sm-flex align-items-center justify-content-between">
            <h6 className="sc-fb9f1326-1 izPFRb mb-sm-0">UPDATE USERS</h6>
            <div className="sc-fb9f1326-2 jncgKT page-title-right">
              <ol className="breadcrumb m-0">
                <li className="breadcrumb-item"></li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="update">
          <div className="col">
            <h5 className="mb-3">Update Users</h5>
          </div>
          <div className="end-btn">
            <div onClick={() => router.push("/")}>
              <Button color="dark 2">Back</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div class="col-xl-6">
              <div class="mb-3 mb-3">
                <label for="First_Name" class="form-label form-label">
                  First Name <span class="invalid-feedback d-inline">*</span>
                </label>
                <input
                  placeholder="First Name"
                  id="First_Name"
                  name="firstName"
                  required=""
                  type="text"
                  class="form-control"
                  //   value="vyom"
                  fdprocessedid="v2e8et"
                />
              </div>
            </div>

            <div class="col-xl-6">
              <div class="mb-3 mb-3">
                <label for="last_Name" class="form-label form-label">
                  Last Name <span class="invalid-feedback d-inline">*</span>
                </label>
                <input
                  placeholder="Last Name"
                  id="last_Name"
                  name="lastName"
                  required=""
                  type="text"
                  class="form-control"
                  //   value="chaudhary"
                  fdprocessedid="uelbw8"
                />
              </div>
            </div>

            <div class="col-xl-6">
              <div class="mb-3 mb-3">
                <label for="email" class="form-label form-label">
                  Email <span class="invalid-feedback d-inline">*</span>
                </label>
                <input
                  placeholder="Enter Your Email"
                  id="email"
                  name="email"
                  required=""
                  type="email"
                  class="is-valid form-control"
                  aria-invalid="false"
                  //   value="vyom@itservicesindia.com"
                  fdprocessedid="x6syuc"
                />
                <div class="invalid-feedback"></div>
              </div>
            </div>

            <div class="col-xl-6">
              <div class="mb-3 mb-3">
                <label for="password" class="form-label form-label">
                  Password <span class="invalid-feedback d-inline">*</span>
                </label>
                <input
                  placeholder="Enter Your Password"
                  id="password"
                  name="password"
                  type="password"
                  class="form-control"
                  //   value="$2b$10$wovPeBYEWoSgYUAqBRQ0keQXTzL3.hI66vZdXRmntXkllfZhDUABC"
                  fdprocessedid="7v0fjp"
                />
              </div>
            </div>

            <div class="col-xl-6">
              <div class="mb-3 mb-3">
                <label for="status" class="form-label form-label">
                  Role <span class="invalid-feedback d-inline">*</span>
                </label>
                <select
                  id="FormInputState"
                  name="role"
                  required=""
                  class="form-select"
                  fdprocessedid="x23fc"
                >
                  <option value="" disabled="">
                    select role
                  </option>
                  <option value="Editor">Editor</option>
                  <option value="Admin">Admin</option>
                </select>
              </div>
            </div>

            <div class="col-xl-12">
              <div class="mb-3 mb-3">
                <label for="status" class="form-label form-label">
                  Status<span class="invalid-feedback d-inline">*</span>
                </label>
                <select
                  id="FormInputState"
                  name="status"
                  required=""
                  class="form-select"
                  fdprocessedid="iibmwt"
                >
                  <option value="">select status</option>
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                  <option value="Delete">Delete</option>
                </select>
              </div>
            </div>

            <div class="col-lg-12">
              <button
                class="btn-dark mt-2 mb-3 btn btn-secondary"
                fdprocessedid="8jmz0s"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
