import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "./nav/Nav.css"

export default class Navbar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <nav className="nav" id="navbar">
        <div className="nav-content">
          <div className="HeaderName">
            {/* <h3 className="by">by </h3> */}
            <h3 className="Name">PORTFOLIO</h3>
          </div>
          <ul className="navContainer">
            <li className="navLink">
              <Link activeClass="active" to="about" spy={true} smooth={true} offset={-70} duration={500} onSetActive={this.handleSetActive}>
                About
              </Link>
            </li>
            <li className="navLink">
              <Link
                activeClass="active"
                to="works"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Works
              </Link>
            </li>
            <li className="navLink">
              <Link
                activeClass="active"
                to="section3"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
