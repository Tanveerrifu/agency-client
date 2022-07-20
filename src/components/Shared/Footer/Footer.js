import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import emailjs from 'emailjs-com';

const Footer = () => {
  function sendEmail(e){
    e.preventDefault();

    emailjs.sendForm('service_0xtsayt',
    'template_egpaxjg',
    e.target,
    'oZwP1qR7h3X7DEppj').then(res=>{
      console.log(res);
    }).catch(err=>console.log(err));
    e.target.reset()
  }
  return (
    <footer
      style={{
        backgroundColor: "#71EA8C",
        padding: "50px 10px",
        width: "100%",
      }}
      id='contact'
    >
      <Container fluid>
        <Row>
          <Col md={6}>
            <h1>
              Let us handle your <br /> problem, professionally.
            </h1>
            <p>
            we’ll create a permanent employment solution by creating an open job field.
            </p>
          </Col>
          <Col md={6}>
            <Form onSubmit={sendEmail}>
              <Form.Group>
                <Form.Control
                  name="email"
                  type="email"
                  placeholder="Your email address *"
                />
              </Form.Group>

              <Form.Group>
                <Form.Control name="name" type="text" placeholder="Your Name" />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  name="companyName"
                  type="text"
                  placeholder="Company name"
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  name="designation"
                  type="text"
                  placeholder="Designation"
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  name="feedback"
                  as="textarea"
                  rows="5"
                  placeholder="Your message"
                />
              </Form.Group>

              <Button className="main-button" type="submit">
                Send
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
      <br />
      <p className="mt-5 mb-3 text-center">
        Copyright Tanvir Hasan {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
