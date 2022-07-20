import { signOut } from "firebase/auth";
import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";
import auth from "../../../firebase.init";
import useAdmin from "../../../hooks/useAdmin";
import "./AppNavbar.css";
import Logo from '../../../images/logo.svg'

const AppNavbar = () => {
  const [user] = useAuthState(auth);
  const [isAdmin] = useAdmin(user);
  const { loggedInUser } = useContext(UserContext);
  console.log(isAdmin,loggedInUser);

  return (
    
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Link to="/">
          <Navbar.Brand>
            <img
              className="logo"
              src={Logo}
              alt=""
            />
           
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/">Home</Nav.Link>

            {isAdmin && <Nav.Link href="/serviceList">Dashboard</Nav.Link>}

            {!isAdmin && <Nav.Link href="/order">Dashboard</Nav.Link>}

            <Nav.Link href="#feedback">Reviews</Nav.Link>
            <Nav.Link href="#Team">Team</Nav.Link>
            <Nav.Link href="#contact">Contact Us</Nav.Link>
            <Nav>
              {user ? (
                <Button
                  onClick={() => signOut(auth)}
                  className=""
                  variant="dark"
                >
                  Sign Out
                </Button>
              ) : (
                <Link to="/login">
                  <Button className="login-button" variant="dark">
                    Login
                  </Button>
                </Link>
              )}
            </Nav>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    
  );
};

export default AppNavbar;
