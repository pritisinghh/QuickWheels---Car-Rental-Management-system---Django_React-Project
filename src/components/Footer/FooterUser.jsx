import React from "react";

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/footer.css";
import carLogo from "../../assets/all-images/better-img/Quick Wheels Logo Cut.png";

const quickLinks = [
  {
    path: "/about",
    display: "About",
  },

  {
    path: "/carsUser",
    display: "Car Listing",
  },

  {
    path: "/blogs",
    display: "Blog",
  },

  {
    path: "/contact",
    display: "Contact",
  },
];

const FooterUser = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row className="row">
          <Col lg="4" md="4" sm="12">
            <div className="logo footer__logo">
              <h1>
                <Link to="/home" className=" d-flex align-items-center gap-2">
                  <img src={carLogo} alt="logo" />
                </Link>
              </h1>
            </div>
            <p className="footer__logo-content" style={{ textAlign: "left" }}>
              Experience the freedom of the open road with our reliable car rentals. Hit the road faster with our lightning-fast car rental service and experience true freedom on the go.
            </p>
          </Col>

          <Col lg="2" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title" style={{ textAlign: "left" }}>Quick Links</h5>
              <ListGroup>
                {quickLinks.map((item, index) => (
                  <ListGroupItem key={index} className="p-0 mt-3 quick__link">
                    <Link to={item.path} style={{ textAlign: "left" }}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title mb-4" style={{ textAlign: "left" }}>Head Office</h5>
              <p className="office__info" style={{ textAlign: "left" }}>700 N Woodlawn Ave, <br /> Bloomington, <br /> IN 47408.</p>
              <p className="office__info" style={{ textAlign: "left" }}>Phone: +1-812-567-1234</p>
              <p className="office__info" style={{ textAlign: "left" }}>Email: carservices@wheels.com</p>
              <p className="office__info" style={{ textAlign: "left" }}>Available: 09:00 - 16:00</p>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title mb-4" style={{ textAlign: "left" }}>Why us?</h5>
              <p className="office__info" style={{ textAlign: "left" }}>Quick Wheels is a reliable and efficient car rental website that provides seamless and hassle-free rental services. With a wide range of vehicles to choose from, you can easily find the perfect car for your needs.</p>
            </div>
          </Col>

          <Col lg="12">
            <div className="footer__bottom">
              <p className="section__description d-flex align-items-center justify-content-center gap-1 pt-4">
                <i class="ri-copyright-line"></i>Copyright {year}, Developed by
                SE Team 18 - SP23. All rights reserved.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default FooterUser;
