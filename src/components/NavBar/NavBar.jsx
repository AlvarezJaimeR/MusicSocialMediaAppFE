import React from "react";
import logo from "../../img/headphones.png";

const NavBar = (props) => {
  return (
    <>
      <nav className="navbar fixed-top navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img
              src={logo}
              alt="logo"
              width="30"
              height="24"
              className="d-inline-block align-text-top"
            />
            Music with Friends
          </a>
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <a
                className={props.tabActive === "0" ? "nav-link active" : "nav-link"}
                aria-current={props.tabActive === "0" ? "page" : ""}
                href="/"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`${props.tabActive === "1" ? "nav-link active" : "nav-link"} ${
                  props.userLoggedIn === true ? null : "disabled"
                }`}
                aria-current={props.tabActive === "1" ? "page" : ""}
                href="/myProfilePage"
              >
                MyProfile
              </a>
            </li>

            <li className="nav-item">
              <a
                className={props.tabActive === "2" ? "nav-link active" : "nav-link"}
                aria-current={props.tabActive === "2" ? "page" : ""}
                href="/search"
              >
                Find Friends
              </a>
            </li>
            <li className="nav-item">
              <a
                className={props.tabActive === "3" ? "nav-link active" : "nav-link"}
                aria-current={props.tabActive === "3" ? "page" : ""}
                href="/about"
                tabIndex="-1"
              >
                About Site
              </a>
            </li>
          </ul>
          {props.userLoggedIn === false ? (
            <>
              <button className="btn btn-outline-primary" href="/register">
                Register
              </button>
              <a className="nav-link" href="/login">
                Sign In
              </a>
            </>
          ) : (
            <button className="btn btn-outline-danger">Logoff</button>
          )}
        </div>
      </nav>
    </>
  );
};

export default NavBar;