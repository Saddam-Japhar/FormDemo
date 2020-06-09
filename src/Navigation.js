import React, { Component } from "react";
import "./Navigation.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faHeart, faCompass } from "@fortawesome/free-solid-svg-icons";

class Navigation extends Component {
  render() {
    return (
      <div class="container nav-wrapper">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand nav-brand-div" href="#">
            Instagram
          </a>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <a class="nav-link active " href="#">
                  <input
                    class="form-control mr-sm-2 search-icon"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                </a>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0 navigation-icon">
              <a className="nav-link nav-icons">
                {" "}
                <FontAwesomeIcon icon={faHome} />
              </a>
              <a className="nav-link nav-icons">
                {" "}
                <FontAwesomeIcon icon={faCompass} />
              </a>
              <a className="nav-link nav-icons">
                {" "}
                <FontAwesomeIcon icon={faHeart} />
              </a>
            </form>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navigation;
