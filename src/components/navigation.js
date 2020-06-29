import React, { Component } from "react";
import { Link } from "gatsby-plugin-modal-routing";

class Navigation extends Component {
  render() {
    return (
      <nav className="nav">
        <ul>
          {this.props.info && (
            <li className="nav__item info">
              <Link to={"/" + this.props.info + "/info"} asModal>
                Info
              </Link>
            </li>
          )}
          {this.props.works && (
            <li className="nav__item work">
              <Link to="/">Works</Link>
            </li>
          )}
          {this.props.about && (
            <li className="nav__item about">
              <Link to="/about" asModal>
                About
              </Link>
            </li>
          )}
        </ul>
      </nav>
    );
  }
}

export default Navigation;
