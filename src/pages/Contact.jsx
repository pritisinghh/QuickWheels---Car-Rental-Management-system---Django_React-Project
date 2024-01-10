import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Maps from "../Map";

import "../styles/contact.css";

const socialLinks = [
  {
    url: "#",
    icon: "ri-facebook-line",
  },
  {
    url: "#",
    icon: "ri-instagram-line",
  },
  {
    url: "#",
    icon: "ri-linkedin-line",
  },
  {
    url: "#",
    icon: "ri-twitter-line",
  },
];

const Contact = () => {
  return (
    <React.Fragment>
      <Header />
      <Helmet title="Contact">
        <CommonSection title="Contact" />
        <section>
          <Container>
            <Row>
              <Col lg="7" md="7">
                <h2 className="fw-bold mb-4">Don't feel shy!</h2>
                <h4 className="fw mb-4">Feel free to reach out to us for assistance.</h4>

                <Form className="text-end">
                  <FormGroup className="contact__form">
                    <Input placeholder="Your Name" type="text" className="minimal-input" />
                  </FormGroup>
                  <FormGroup className="contact__form">
                    <Input placeholder="Email" type="email" className="minimal-input" />
                  </FormGroup>
                  <FormGroup className="contact__form">
                    <textarea
                      rows="5"
                      placeholder="Message"
                      className="minimal-textarea"
                    ></textarea>
                  </FormGroup>

                  <button className="contact__btn" type="submit">
                    Submit
                  </button>
                </Form>
              </Col>

              <Col lg="5" md="5">
                <div className="contact__info">
                  <h6 className="fw-bold">Contact Information</h6>
                  <p className="section__description mb-0">
                    700 N Woodlawn Ave,
                    Bloomington,
                    IN 47408
                  </p>
                  <div className="d-flex align-items-center gap-2">
                    <h6 className="fs-6 mb-0">Phone:</h6>
                    <p className="section__description mb-0">+1-812-567-1234</p>
                  </div>

                  <div className="d-flex align-items-center gap-2">
                    <h6 className="mb-0 fs-6">Email:</h6>
                    <p className="section__description mb-0">carservices@wheels.com</p>
                  </div>

                  <h6 className="fw-bold mt-4 text-center">Follow Us</h6>

                  <div className="d-flex align-items-center justify-content-center gap-5 mt-4">
                    {socialLinks.map((item, index) => (
                      <Link
                        to={item.url}
                        key={index}
                        className="social__link-icon"
                      >
                        <i class={item.icon}></i>
                      </Link>
                    ))}
                  </div>
                </div>
              </Col>
            </Row>
            <Maps latitude="51.5074" longitude="-0.1278" />
          </Container>
        </section>
      </Helmet>
      <Footer />
    </React.Fragment>
  );
};

export default Contact;
