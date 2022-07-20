import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./OurClients.css";
import client1 from '../../../images/logos/airbnb.png'
import client2 from '../../../images/logos/google.png'
import client3 from '../../../images/logos/netflix.png'
import client4 from '../../../images/logos/slack.png'
import client5 from '../../../images/logos/uber.png'



const OurClients = () => {
  return (
    <section className="our-client mb-5">
      <Container fluid>
        <div>
          <Row>
            <Col xs={4} md={{ span: 2, offset: 1 }} lg={{ span: 2, offset: 1 }}>
              <img src={client1} alt="" />
            </Col>
            <Col xs={4} md={2} lg={2}>
              <img src={client2} alt="" />
            </Col>
            <Col xs={4} md={2} lg={2}>
              <img src={client3} alt="" />
            </Col>
            <Col xs={4} md={2} lg={2}>
              <img src={client4} alt="" />
            </Col>
            <Col xs={4} md={2} lg={2}>
              <img src={client5} alt="" />
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default OurClients;
