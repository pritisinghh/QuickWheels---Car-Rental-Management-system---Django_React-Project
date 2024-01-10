import React from "react";
import { Container } from "reactstrap";
import "../../styles/common-section2.css"; // Update import path

const CommonSection2 = ({ title }) => {
  return (
    <section className="common__section2 mb-5"> {/* Update class name */}
      <div className="position-relative"> {/* Add wrapper div */}
        <Container className="text-center">
          <h2>{title}</h2> {/* Update heading level */}
        </Container>
        <div className="common__section2-overlay"></div> {/* Add overlay div */}
      </div>
    </section>
  );
};

export default CommonSection2;
