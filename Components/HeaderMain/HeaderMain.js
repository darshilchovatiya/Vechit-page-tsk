import { Icon } from "@iconify/react";
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown
} from "reactstrap";

export default function HeaderMain() {
  return (
    <div className="app-header">
      <div className="logo">
        <img src="/vechit_logo.png"></img>
      </div>
      <div className="heder-content">
        <div className="searchbar w-50">
          <input
            id="search"
            name="search"
            placeholder="Looks orders by ID, Service item or Customer name"
            type="text"
            class="mainSearch form-control"
            fdprocessedid="3m654q"
          />
          <span className="searchicon">
            <Icon icon="mingcute:search-line" />
          </span>
        </div>
        <div className="header-rightside">
          <div className="notif">
            <span className="notif-icon">
              <Icon icon="material-symbols-light:notifications-unread-outline-sharp" />
            </span>
          {/* <div className="fullscreen"> */}
            <span className="fullscreen-icon">
              <Icon icon="material-symbols-light:fullscreen" />
            </span>
          </div>

          {/* </div> */}
          <div className="profile">
            <UncontrolledDropdown color="white">
              <DropdownToggle color="white">
                <img src="/userProfile.jpeg"></img>
              </DropdownToggle>
              <DropdownMenu color="white">
                <DropdownItem>
                  <div className="line1">
                    <div className="proicon">
                      <Icon icon="iconamoon:profile-circle" />
                    </div>
                    My Profile
                  </div>
                </DropdownItem>
                <DropdownItem>
                  <div className="line1">
                    <div className="proicon">
                      <Icon icon="mdi:logout" />
                    </div>
                    Log Out
                  </div>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            <div class="profile-text">
              <div class="name">darshil Chovatiya</div>
              <div class="position">Admin</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
