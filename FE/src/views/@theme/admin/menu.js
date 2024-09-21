import React from "react";

const Menu = () => {
  return (
    <aside className="aside-admin">
      <div className="toggle">
        <div className="logo">
          {/* <img src="images/logo.png"> */}
          <h2>
            NHU<span className="danger">YS</span>
          </h2>
        </div>

        <div className="close" id="close-btn">
          <span className="material-icons-sharp">close</span>
        </div>
      </div>

      <div className="sidebar-admin">
        <a href="/admin" className="active">
          <span className="material-icons-sharp">dashboard</span>
          <h3>Dashboard</h3>
        </a>
        <a href="/admin/users">
          <span className="material-icons-sharp">group</span>
          <h3>Customer</h3>
        </a>
        <a href="#">
          <span className="material-icons-sharp">work_outline</span>
          <h3>Personnel</h3>
        </a>
        <a href="/admin/order">
          <span className="material-icons-sharp">receipt</span>
          <h3>Orders</h3>
        </a>
        <a href="#">
          <span className="material-icons-sharp">storefront</span>
          <h3>Products</h3>
          <span className="message-count">27</span>
        </a>
        <a href="#">
          <span className="material-icons-sharp">payment</span>
          <h3>Payment</h3>
        </a>
        <a href="#">
          <span className="material-icons-sharp">bar_chart</span>
          <h3>Statistics</h3>
        </a>
        <a href="#">
          <span className="material-icons-sharp">settings</span>
          <h3>Settings</h3>
        </a>
        <a href="#">
          <span className="material-icons-sharp">person_add</span>
          <h3>New Login</h3>
        </a>
        <a href="#">
          <span className="material-icons-sharp">logout</span>
          <h3>Logout</h3>
        </a>
      </div>
    </aside>
  );
};

export default Menu;
