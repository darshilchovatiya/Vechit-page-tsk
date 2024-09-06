import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
} from "reactstrap";

export default function CustomerMainCard({ direction = "down", ...args }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("All");

  const toggleDropdown = () => setDropdownOpen((prevState) => !prevState);

  const handleSelect = (item) => {
    setSelectedItem(item);
    setDropdownOpen(false);
    toggleDropdown();
  };
  
  return (
    <>
      <div className="customer">
        <div className="row">
          <div className="col-xl-12">
            <div className="sc-fb9f1326-0 TnemY d-sm-flex align-items-center justify-content-between">
              <h6 className="sc-fb9f1326-1 izPFRb mb-sm-0">CUSTOMER</h6>
              <div className="sc-fb9f1326-2 jncgKT page-title-right"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="card mb-3">
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
                  <Dropdown
                    className="custom-dropdown"
                    isOpen={dropdownOpen}
                    toggle={toggleDropdown}
                    direction={direction}
                  >
                    <DropdownToggle caret color="primary 5">
                      {selectedItem}
                    </DropdownToggle>
                    <DropdownMenu {...args}>
                      <DropdownItem onClick={() => handleSelect("All")}>
                        All
                      </DropdownItem>
                      <DropdownItem onClick={() => handleSelect("Active")}>
                        Active
                      </DropdownItem>
                      <DropdownItem onClick={() => handleSelect("Inactive")}>
                        Inactive
                      </DropdownItem>
                      <DropdownItem onClick={() => handleSelect("Delete")}>
                        Delete
                      </DropdownItem>
                      <DropdownItem onClick={() => handleSelect("Block")}>
                        Block
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </div>
              </div>
            </div>
          </div>
          <div className="click-btn-search">
            <Button color="dark search">Search</Button>
          </div>
          <div className="click-btn-search">
            <Button color="dark search">Reset</Button>
          </div>
        </div>
      </div>
    </>
  );
}
