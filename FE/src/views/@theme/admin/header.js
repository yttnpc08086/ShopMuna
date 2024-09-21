import React from "react";
import profile from "../../../assets/admin/images/profile-1.jpg";
const Header = () => {
  return (
    <div className="right-section">
      <div className="nav">
        <button id="menu-btn">
          <span className="material-icons-sharp">menu</span>
        </button>
        {/* <div className="dark-mode">
          <span className="material-icons-sharp active">light_mode</span>
          <span className="material-icons-sharp">dark_mode</span>
        </div> */}

        <div className="profile">
          <div className="info">
            <p>
              Hey, <b>Admin</b>
            </p>
          </div>
          <div className="profile-photo">
            <img src={profile} alt="Profile" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
