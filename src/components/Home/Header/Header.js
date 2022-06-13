import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./Header.css";
//import Banner from '../../../images/banner.png'

const Header = () => {
  return (
    <header>
      <Container className="d-flex align-items-center header-container">
        <Row>
          <Col className="my-2" md={6}>
            <div className="header-details">
              <h1 className="header-title">
                <span className="slogan1">Let's Grow Your</span>
                <br />
                Brand To The
                <br />
                Next Level
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                suscipit modi, dignissimos expedita architecto perspiciatis
                perferendis itaque. Rem voluptates quidem voluptas excepturi,
                ducimus laboriosam nesciunt atque, ipsam vel magni ex?
              </p>
              <Button className="main-button">Hire us</Button>
            </div>
          </Col>
          <Col className="my-2" md={6}>
            <img
              className="header-img"
              src="https://i.imgur.com/ToN8Hyc.png"
              alt=""
            />
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
