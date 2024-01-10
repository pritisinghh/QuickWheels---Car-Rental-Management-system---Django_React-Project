import React from "react";

import HeroSlider from "../components/UI/HeroSlider";
import Helmet from "../components/Helmet/Helmet";

import { Container, Row, Col } from "reactstrap";
// import FindCarForm from "../components/UI/FindCarForm";
import ServicesList from "../components/UI/ServicesList";
import carData from "../assets/data/carData";
import CarItem from "../components/UI/CarItem";

const HomeLayout = () => {
  return (
    <React.Fragment>
      <Helmet title="Home">
        {/* ============= hero section =========== */}
        <section className="p-0 hero__slider-section">
          <HeroSlider />

          {/* <div className="hero__form">
            <Container>
              <Row className="form__row">
                <Col lg="4" md="4">
                  <div className="find__cars-left">
                    <h2>Find the best deal for you!</h2>
                  </div>
                </Col>

                <Col lg="8" md="8" sm="12">
                  <FindCarForm />
                </Col>
              </Row>
            </Container>
          </div> */}
        </section>
        {/* =========== about section ================ 
      <AboutSection />
       ========== services section ============ */}
        <section>
          <Container>
            <Row>
              <Col lg="12" className="mb-5 text-center">
                <h6 className="section__subtitle">We offer</h6>
                <h2 className="section__title">Best Services</h2>
              </Col>

              <ServicesList />
            </Row>
          </Container>
        </section>
        {/* =========== car offer section ============= */}
        <section>
          <Container>
            <Row>
              <Col lg="12" className="text-center mb-5">
                <h6 className="section__subtitle">We provide</h6>
                <h2 className="section__title">Best Deals</h2>
              </Col>

              {carData.slice(0, 6).map((item) => (
                <CarItem item={item} key={item.id} />
              ))}
            </Row>
          </Container>
        </section>

      </Helmet>
    </React.Fragment>
  );
};

export default HomeLayout;
