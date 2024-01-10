import React from "react";
import { Container, Row } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import BlogList from "../components/UI/BlogList";
import HeaderUser from "../components/Header/HeaderUser";
import FooterUser from "../components/Footer/FooterUser";

const BlogUser = () => {
  return (
    <React.Fragment>
      <HeaderUser />
      <Helmet title="Blogs">
        <CommonSection title="Blogs" />
        <section>
          <Container>
            <Row>
              <BlogList />
            </Row>
          </Container>
        </section>
      </Helmet>
      <FooterUser />
    </React.Fragment>
  );
};

export default BlogUser;