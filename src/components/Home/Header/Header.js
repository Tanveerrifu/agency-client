import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./Header.css";
import banner from '../../../images/banner.svg'
import hireImg from '../../../images/hire-us.svg'

const Header = () => {
  return (
    <header>
      <Container className="d-flex align-items-center header-container">
        <Row>
          <Col className="my-2" md={6}>
            <div className="header-details">
              <h1 className="header-title">
                A Complete
                <br />
                Software & Hardware
                <br />
                Solution
              </h1>
              <p>
                We are here to help you by giving Software and Hardware Solution. Our Dedicated Engineers will observe your problems will give solution with exoert hands!!
              </p>
              <img
              className="hire-us"
              src={hireImg}
              alt=""
            />
            </div>
          </Col>
          <Col className="my-2" md={6}>
            <img
              className="header-img"
              src={banner}
              alt=""
            />
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;