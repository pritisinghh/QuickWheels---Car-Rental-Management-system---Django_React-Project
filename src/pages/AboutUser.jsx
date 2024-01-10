
import React from "react";

import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import AboutSection from "../components/UI/AboutSection";
import { Container, Row, Col } from "reactstrap";
import BecomeDriverSection from "../components/UI/BecomeDriverSection";

import driveImg from "../assets/all-images/Safety-drive.svg";
import OurMembers from "../components/UI/OurMembers";
import "../styles/about.css";

import HeaderUser from "../components/Header/HeaderUser";
import FooterUser from "../components/Footer/FooterUser";

const AboutUser = () => {
  return (
    <React.Fragment>
      <React.Fragment>
        <HeaderUser />
      </React.Fragment>
      <React.Fragment>
        <Helmet title="About">
          <CommonSection title="About Us" />
          <AboutSection aboutClass="aboutPage" />

          <section className="about__page-section">
            <Container>
              <Row>
                <Col lg="6" md="6" sm="12">
                  <div className="about__page-img">
                    <img src={driveImg} alt="" className="w-100 rounded-3" />
                  </div>
                </Col>

                <Col lg="6" md="6" sm="12">
                  <div className="about__page-content">
                    <h2 className="section__title">
                      Safety isn't just a feature, it's our philosophy
                    </h2>

                    <p className="section__description">
                      QuickWheels prioritizes safety and goes above and beyond to provide safe ride solutions.
                      We understand that when you're behind the wheel, you want to feel confident and secure.
                      That's why we go above and beyond to provide safe ride solutions that give you peace of mind
                      every time you rent from us.
                    </p>

                    <p className="section__description">
                      From our rigorous maintenance checks to our comprehensive
                      insurance coverage, we leave no stone unturned when it comes to your safety. We believe
                      that every customer deserves a safe and reliable ride. Whether you're a local resident
                      or a visitor to our city, you can count on us to provide the safest ride solutions around.
                    </p>

                    <div className=" d-flex align-items-center gap-3 mt-4">
                      <span className="fs-4">
                        <i class="ri-phone-line"></i>
                      </span>

                      <div>
                        <h6 className="section__subtitle">Need Any Help?</h6>
                        <h4>+00123456789</h4>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>

          <BecomeDriverSection />

          <section>
            <Container>
              <Row>
                <Col lg="12" className="mb-5 text-center">
                  <h6 className="section__subtitle">Experts</h6>
                  <h2 className="section__title">Our Members</h2>
                </Col>
                <OurMembers />
              </Row>
            </Container>
          </section>
        </Helmet>
      </React.Fragment>
      <React.Fragment>
        <FooterUser />
      </React.Fragment>
    </React.Fragment>
  );
};

export default AboutUser;