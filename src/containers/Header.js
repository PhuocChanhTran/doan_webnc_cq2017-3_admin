import React from "react";
import { useHistory } from "react-router";
export default function Header(props) {
  const history = useHistory();
  const btnLogout_Clicked = () =>{
    delete localStorage.userEmail;
    delete localStorage.accessToken;
    delete localStorage.refreshToken;
    history.push("/login");
  }
  const btnHome_click = () =>{
    history.push("/");
  }
  return (
    <div>
      <header className="topbar" data-navbarbg="skin5">
        <nav className="navbar top-navbar navbar-expand-md navbar-dark">
          <div className="navbar-header" data-logobg="skin5">
            {/* ============================================================== */}
            {/* Logo */}
            {/* ============================================================== */}
            <button className="navbar-brand button-custom" onClick={btnHome_click}>
              {/* Logo icon */}
              <b className="logo-icon ps-2">
                {/*You can put here icon as well // <i class="wi wi-sunset"></i> //*/}
                {/* Dark Logo icon */}
                <img
                  src="../../assets/images/logo-icon.png"
                  alt="homepage"
                  className="light-logo"
                />
              </b>
              {/*End Logo icon */}
              {/* Logo text */}
              <span className="logo-text">
                {/* dark Logo text */}
                <img
                  src="../../assets/images/logo-text.png"
                  alt="homepage"
                  className="light-logo"
                />
              </span>
              {/* Logo icon */}
              {/* <b class="logo-icon"> */}
              {/*You can put here icon as well // <i class="wi wi-sunset"></i> //*/}
              {/* Dark Logo icon */}
              {/* <img src="../../assets/images/logo-text.png" alt="homepage" class="light-logo" /> */}
              {/* </b> */}
              {/*End Logo icon */}
            </button>
            {/* ============================================================== */}
            {/* End Logo */}
            {/* ============================================================== */}
            {/* ============================================================== */}
            {/* Toggle which is visible on mobile only */}
            {/* ============================================================== */}
            <a
              className="nav-toggler waves-effect waves-light d-block d-md-none"
              href="javascript:void(0)"
            >
              <i className="ti-menu ti-close" />
            </a>
          </div>
          {/* ============================================================== */}
          {/* End Logo */}
          {/* ============================================================== */}
          <div
            className="navbar-collapse collapse"
            id="navbarSupportedContent"
            data-navbarbg="skin5"
          >
            {/* ============================================================== */}
            {/* toggle and nav items */}
            {/* ============================================================== */}
            <ul className="navbar-nav float-start me-auto">
              <li className="nav-item d-none d-lg-block">
                <a
                  className="nav-link sidebartoggler waves-effect waves-light"
                  href="javascript:void(0)"
                  data-sidebartype="mini-sidebar"
                >
                  <i className="mdi mdi-menu font-24" />
                </a>
              </li>
              {/* ============================================================== */}
              {/* create new */}
              {/* ============================================================== */}
              {/* <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span className="d-none d-md-block">
                    Create New <i className="fa fa-angle-down" />
                  </span>
                  <span className="d-block d-md-none">
                    <i className="fa fa-plus" />
                  </span>
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li> */}
              {/* ============================================================== */}
              {/* Search */}
              {/* ============================================================== */}
              {/* <li className="nav-item search-box">
                {" "}
                <a
                  className="nav-link waves-effect waves-dark"
                  href="javascript:void(0)"
                >
                  <i className="ti-search" />
                </a>
                <form className="app-search position-absolute">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search & enter"
                  />{" "}
                  <a className="srh-btn">
                    <i className="ti-close" />
                  </a>
                </form>
              </li> */}
            </ul>
            {/* ============================================================== */}
            {/* Right side toggle and nav items */}
            {/* ============================================================== */}
            <ul className="navbar-nav float-end">
              {/* ============================================================== */}
              {/* Comment */}
              {/* ============================================================== */}
              {/* <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="mdi mdi-bell font-24" />
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li> */}
              {/* ============================================================== */}
              {/* End Comment */}
              {/* ============================================================== */}
              {/* ============================================================== */}
              {/* Messages */}
              {/* ============================================================== */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle waves-effect waves-dark"
                  href="#"
                  id={2}
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="font-24 mdi mdi-comment-processing" />
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-end mailbox animated bounceInDown"
                  aria-labelledby={2}
                >
                  <ul className="list-style-none">
                    <li>
                      <div className>
                        {/* Message */}
                        <a
                          href="javascript:void(0)"
                          className="link border-top"
                        >
                          <div className="d-flex no-block align-items-center p-10">
                            <span className="btn btn-success btn-circle">
                              <i className="ti-calendar" />
                            </span>
                            <div className="ms-2">
                              <h5 className="mb-0">Event today</h5>
                              <span className="mail-desc">
                                Just a reminder that event
                              </span>
                            </div>
                          </div>
                        </a>
                        {/* Message */}
                        <a
                          href="javascript:void(0)"
                          className="link border-top"
                        >
                          <div className="d-flex no-block align-items-center p-10">
                            <span className="btn btn-info btn-circle">
                              <i className="ti-settings" />
                            </span>
                            <div className="ms-2">
                              <h5 className="mb-0">Settings</h5>
                              <span className="mail-desc">
                                You can customize this template
                              </span>
                            </div>
                          </div>
                        </a>
                        {/* Message */}
                        <a
                          href="javascript:void(0)"
                          className="link border-top"
                        >
                          <div className="d-flex no-block align-items-center p-10">
                            <span className="btn btn-primary btn-circle">
                              <i className="ti-user" />
                            </span>
                            <div className="ms-2">
                              <h5 className="mb-0">Pavan kumar</h5>
                              <span className="mail-desc">
                                Just see the my admin!
                              </span>
                            </div>
                          </div>
                        </a>
                        {/* Message */}
                        <a
                          href="javascript:void(0)"
                          className="link border-top"
                        >
                          <div className="d-flex no-block align-items-center p-10">
                            <span className="btn btn-danger btn-circle">
                              <i className="fa fa-link" />
                            </span>
                            <div className="ms-2">
                              <h5 className="mb-0">Luanch Admin</h5>
                              <span className="mail-desc">
                                Just see the my new admin!
                              </span>
                            </div>
                          </div>
                        </a>
                      </div>
                    </li>
                  </ul>
                </ul>
              </li>
              {/* ============================================================== */}
              {/* End Messages */}
              {/* ============================================================== */}
              {/* ============================================================== */}
              {/* User profile and search */}
              {/* ============================================================== */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-muted waves-effect waves-dark pro-pic"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="../../assets/images/users/1.jpg"
                    alt="user"
                    className="rounded-circle"
                    width={31}
                  />
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-end user-dd animated"
                  aria-labelledby="navbarDropdown"
                >
                  <a className="dropdown-item" href="javascript:void(0)">
                    <i className="ti-user me-1 ms-1" />
                    My Profile
                  </a>
                  <a className="dropdown-item" href="javascript:void(0)">
                    <i className="ti-wallet me-1 ms-1" />
                    My Balance
                  </a>
                  <a className="dropdown-item" href="javascript:void(0)">
                    <i className="ti-email me-1 ms-1" />
                    Inbox
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="javascript:void(0)">
                    <i className="ti-settings me-1 ms-1" /> Account Setting
                  </a>
                  <div className="dropdown-divider" />
                  <a onClick={btnLogout_Clicked} className="dropdown-item" href="javascript:void(0)">
                    <i className="fa fa-power-off me-1 ms-1" /> Logout
                  </a>
                  <div className="dropdown-divider" />
                  <div className="ps-4 p-10">
                    <a
                      href="javascript:void(0)"
                      className="btn btn-sm btn-success btn-rounded text-white"
                    >
                      View Profile
                    </a>
                  </div>
                </ul>
              </li>
              {/* ============================================================== */}
              {/* User profile and search */}
              {/* ============================================================== */}
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
}
