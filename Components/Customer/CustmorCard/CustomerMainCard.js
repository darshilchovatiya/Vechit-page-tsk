import { useState } from "react";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";

export default function CustomerMainCard() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  return (
    <>
      <div className="card">
        <div className="card-header custcard">
          <div className="w-25 mb-3">
            <label for="search1" className="form-label">
              Search
            </label>
            <input
              id="search1"
              name="search"
              placeholder="customer name"
              type="text"
              className="form-control"
              fdprocessedid="3m654q"
            />
          </div>
          <div className="w-25 mb-3">
            <label for="From_Date" className="form-label">
              From Date
            </label>
            <input
              id="From_Date"
              name="date"
              placeholder="From Date"
              type="date"
              className="form-control"
            />
          </div>
          <div className="w-25 mb-3">
            <label for="To_Date" className="form-label">
              To Date
            </label>
            <input
              id="To_Date"
              name="date"
              placeholder="date placeholder"
              type="date"
              className="form-control"
            />
          </div>
          <div className="w-2 mb-3">
            <label for="status" className="form-label">
              Status
            </label>
            <div className="customerdropdown">
              <div className="col-xl-6">
                <div className="mb-3 mb-3">
                  <select
                    id="status"
                    name="status"
                    className="custdrop"
                    fdprocessedid="tcm4xr"
                  >
                    <option value="All">All</option>
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                    <option value="Delete">Delete</option>
                    <option value="Block">Block</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="click-btn">
            <Button color="dark">Search</Button>
          </div>
          <div className="click-btn">
            <Button color="dark">Reset</Button>
          </div>
        </div>
      </div>
    </>
  );
}
