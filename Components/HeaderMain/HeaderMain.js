import { Icon } from "@iconify/react";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";

export default function HeaderMain() {
  const router = useRouter();
  const [isFullscreen, setIsFullscreen] = useState(false);

  const enterFullscreen = () => {
    const elem = document.documentElement;
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
    }
    setIsFullscreen(true);
  };

  const exitFullscreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
    setIsFullscreen(false);
  };

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      enterFullscreen();
    } else {
      exitFullscreen();
    }
  };

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
            className="mainSearch form-control"
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
            <span className="fullscreen-icon" onClick={toggleFullscreen}>
              <Icon icon="material-symbols-light:fullscreen" />
            </span>
          </div>

          {/* </div> */}
          <div className="profile ">
            <UncontrolledDropdown color="white">
              <DropdownToggle color="white">
                <div>
                  <img src="/userProfile.jpeg"></img>
                </div>
                <div className="profile-text">
                  <div className="name">darshil Chovatiya</div>
                  <div className="position">Admin</div>
                </div>
              </DropdownToggle>
              <DropdownMenu color="white">
                <DropdownItem className="pro">
                  <div
                    className="line1"
                    onClick={() => router.push("/updateprofile")}
                  >
                    <div className="proicon">
                      <Icon icon="iconamoon:profile-circle" />
                    </div>
                    My Profile
                  </div>
                </DropdownItem>
                <DropdownItem className="pro">
                  <div className="line1">
                    <div className="proicon">
                      <Icon icon="mdi:logout" />
                    </div>
                    Log Out
                  </div>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </div>
        </div>
      </div>
    </div>
  );
}
