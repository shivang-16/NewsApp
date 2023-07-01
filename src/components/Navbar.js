import React, { Component } from "react";
import PropTypes from "prop-types";

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
            <a className="navbar-brand" href="#">
              <img
                src="https://thumbnails.yayimages.com/1600/b/3ac/b3ac7fe.jpg"
                alt=""
                width="30"
                height="30"
                style={{ borderRadius: "10px" }}
              />
            </a>
            <a className="navbar-brand" href="/">
              NewsSphere
            </a>
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
                  <a className="nav-link" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/general">
                    General
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/sports">
                    Sports
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/business">
                    Business
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/entertainment">
                    Entertainment
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/health">
                    Health
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/science">
                    Science
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/technology">
                    Technology
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Country
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="/">
                        India
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        United Stated
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        See more...
                      </a>
                    </li>
                  </ul>
                </li>
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
