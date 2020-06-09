import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faComment,
  faShareSquare,
} from "@fortawesome/free-solid-svg-icons";
import "./MainSection.css";

export class MainSection extends Component {
  render() {
    return (
      <div className="container content mt-3">
        <div class="card card-div">
          <h5 className="card-title top-title">
            <img
              src="/images/PriyankaProfile.jpg"
              height="30"
              width="20"
              className="page-image "
            ></img>{" "}
            Priyanka.chopra
          </h5>
          <img
            class="card-img-top img-card"
            src="/images/Priyanka.jpeg"
            alt="Card image cap"
          />
          <div class="card-body">
            <h5 className="card-title">
              <FontAwesomeIcon className="mr-1 p-icon" icon={faHeart} />
              <FontAwesomeIcon className="mr-2 p-icon" icon={faComment} />
              <FontAwesomeIcon className="p-icon" icon={faShareSquare} />
            </h5>
            <p class="card-text">221000 likes</p>
            <p class="card-text">
              {" "}
              Happy birthday queen❤️ you're one of my most favorite actresses
              and I adore you so much. One time you noticed me and called me
              amazing, that was the happiest day of my life.❤️
            </p>
            <p className="minutes"> 37 minutes ago</p>
          </div>
        </div>
      </div>
    );
  }
}

export default MainSection;
