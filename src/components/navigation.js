import React, { Component } from "react";
import { Link } from "gatsby-plugin-modal-routing";

class Navigation extends Component {
  render() {
    return (
      <nav className="nav">
        <ul>
          {this.props.about && (
            <li className="nav__item about">
              <Link to="/about" asModal>
                About
              </Link>
            </li>
          )}
          {this.props.info && (
            <li className="nav__item info">
              <Link to={"/" + this.props.info + "/info"} asModal>
                Info
              </Link>
            </li>
          )}
          {this.props.works && (
            <li className="nav__item work">
              <Link to="/">Work</Link>
            </li>
          )}
          {this.props.index && (
            <li className="nav__item index">
              <Link to="/index-page">Index</Link>
            </li>
          )}
        </ul>
      </nav>
    );
  }
}

export default Navigation;
