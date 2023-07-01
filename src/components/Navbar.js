import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  static propTypes = {
    mode: PropTypes.string,
  };
  render() {
    return (
      <>
        <nav
          className={`navbar navbar-expand-lg navbar-${this.props.mode} bg-${this.props.mode}`}
          style={{ position: "sticky", top: "0", zIndex: "2" }}
        >
          <div className="container-fluid">
            <Link className="navbar-brand" to="/general">
              <img
                src="https://thumbnails.yayimages.com/1600/b/3ac/b3ac7fe.jpg"
                alt=""
                width="30"
                height="30"
                style={{ borderRadius: "10px" }}
              />
            </Link>
            <Link className="navbar-brand" to="/general">
              NewsSphere
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/general">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/sports">
                    Sports
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/business">
                    Business
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/entertainment">
                    Entertainment
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/health">
                    Health
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/science">
                    Science
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/technology">
                    Technology
                  </Link>
                </li>
                {/* <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    to="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Country
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="/">
                        India
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/">
                        United Stated
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/">
                        See more...
                      </Link>
                    </li>
                  </ul>
                </li> */}
              </ul>
              <div
                className={`form-check form-switch text-${
                  this.props.mode === "dark" ? "light" : "dark"
                }`}
              >
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault" onClick={this.props.toggleMode}/>
                <label
                  className="form-check-label"
                  htmlFor="flexSwitchCheckDefault"
                >
                  {this.props.mode==='dark'?'Dark Mode ON':'Light Mode ON'}
                </label>
              </div>
            
            </div>
          </div>
        </nav>
      </>
    );
  }
}
