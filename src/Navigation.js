import React from "react";
import { Link } from "react-router-dom";
class Navigation extends React.Component {
  render() {
    console.log(this.props.links);
    let linkMarkUp = this.props.links.map((item, index) => {
      return (
        <li className="nav-item active mr-3">
          <Link to={item.link} className="nav-link btn btn-outline-primary">
            {item.label1}
          </Link>
        </li>
      );
    });

    return (
      <div className="container">
        <ul className=" nav ">{linkMarkUp}</ul>
      </div>
    );
  }
}
export default Navigation;
