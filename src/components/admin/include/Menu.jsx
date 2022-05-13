import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
function Menu() {
  const navigate = useNavigate();

  if (localStorage.getItem("DM_Admin_ID") == null) {
    toast.error("Please login first...!");
    navigate("/travel-app-admin");
  }

  const Logout = () => {
    localStorage.removeItem("DM_Admin_ID");
    localStorage.removeItem("DM_Admin_EMAIL");
    localStorage.removeItem("DM_Admin_NAME");
    toast.success("Logout Successfully...!");
  };

  var dashboardClass = window.location.pathname.match(/^\/dashboard/)
    ? "active"
    : "";
  var userListClass = window.location.pathname.match(/^\/user-list/)
    ? "active"
    : "";

  // var addRestaurantsClass = window.location.pathname.match(/^\/add-restaurant/) ? "active" : "";

  var userStateClass = window.location.pathname.match(/^\/user-state/)
    ? "active"
    : "";
  //  if(addRestaurantsClass=='active'){
  //      restaurantsClass = 'active';
  //  }
  var locationManagementClass = window.location.pathname.match(
    /^\/location-management/
  )
    ? "active"
    : "";

  var countryManagementClass = window.location.pathname.match(
    /^\/country-management/
  )
    ? "active"
    : "";

  var inquiriesClass = window.location.pathname.match(/^\/inquiries/)
    ? "active"
    : "";
  var feedbackClass = window.location.pathname.match(/^\/feedback/)
    ? "active"
    : "";

  return (
    <>
      <div id="header" className="header navbar-default">
        <div className="navbar-header">
          <NavLink to="/dashboard" className="navbar-brand ">
            <img
              src="/assets/img/logo/adminLogo.png"
              alt="Dance-Match-logo"
              className="d-inline-block align-text-top mr-2"
            />
            <span className="BrudAdmin">
              <b>Travel App</b>
            </span>
          </NavLink>

          <button
            type="button"
            className="navbar-toggle"
            data-click="sidebar-toggled"
          >
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
        </div>

        <ul className="navbar-nav navbar-right">
          <li className="dropdown navbar-user">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown">
              <img src="assets/img/user/user-13.jpg" alt="" />
              <span className="d-none d-md-inline userName">
                {/* {localStorage.getItem("BRUD_Admin_NAME")} */}
                Dance Admin
              </span>{" "}
              <b className="caret"></b>
            </a>
            <div
              className="dropdown-menu dropdown-menu-right"
              style={{ borderRadius: "20px", padding: "5px " }}
            >
              <span className="dropdown-item">
                <NavLink
                  to="/admin-profile"
                  style={{ textDecoration: "none", color: "#231549" }}
                >
                  <span className="DropdownItem" style={{ color: "#231549" }}>
                    Edit Profile
                  </span>
                </NavLink>
              </span>
              <a onClick={Logout} className="dropdown-item DropdownItem">
                Log Out
              </a>
            </div>
          </li>
        </ul>
      </div>

      <div id="sidebar" className="sidebar">
        <div data-scrollbar="true" data-height="100%">
          <div className="nav-header"></div>
          <ul className="nav">
            <li>
              <NavLink
                to="/dashboard"
                className={dashboardClass}
                activeClassName="active"
              >
                <div className="menuItemDiv">
                  <i className="fa fa-th-large menuIcon"></i>
                  <span className="menuItem">Dashboard</span>
                </div>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/user-list"
                className={userListClass}
                activeClassName="active"
              >
                <div className="menuItemDiv">
                  <i className="fa fa-users menuIcon"></i>
                  <span className="menuItem">Users</span>
                </div>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/user-state"
                className={userStateClass}
                activeClassName="active"
              >
                <div className="menuItemDiv">
                  <i className="fa fa-chart-pie menuIcon"></i>
                  <span className="menuItem">Analyze</span>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/location-management"
                className={locationManagementClass}
                activeClassName="active"
              >
                <div className="menuItemDiv">
                  <i className="fa fa-map-pin menuIcon"></i>
                  <span className="menuItem">Location</span>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/country-management"
                className={countryManagementClass}
                activeClassName="active"
              >
                <div className="menuItemDiv">
                  <i className="fa fa-globe menuIcon"></i>
                  <span className="menuItem"> Country</span>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/inquiries"
                className={inquiriesClass}
                activeClassName="active"
              >
                <div className="menuItemDiv">
                  <i className="fa fa-question menuIcon"></i>

                  <span className="menuItem"> Inquiries</span>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/feedback"
                className={feedbackClass}
                activeClassName="active"
              >
                <div className="menuItemDiv">
                  <i className="fa fa-comment menuIcon"></i>
                  <span className="menuItem">Feedback</span>
                </div>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Menu;
