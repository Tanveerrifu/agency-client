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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                suscipit modi, dignissimos expedita architecto perspiciatis
                perferendis itaque. Rem voluptates quidem voluptas excepturi,
                ducimus laboriosam nesciunt atque, ipsam vel magni ex?
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