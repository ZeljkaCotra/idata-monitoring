import React, {Component} from "react";
import Navbar from "react-bootstrap/Navbar"; 
import Logo from "../asserts/logo.png";
/**
 * @componentName Nav
 * @description This is a component responsible for Top Navbar
 */

class Nav extends Component {
 
  render() {   
      return(
        <Navbar bg="light" variant="light">
        <Navbar.Brand>
          <img
            alt="logo"   
            src={Logo}
            height="70"
            className="d-inline-block align-top"
          />{' '}
        </Navbar.Brand>
      </Navbar>
    );
  }
}

export default Nav;