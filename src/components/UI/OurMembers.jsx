import React from "react";
import "../../styles/our-member.css";
import { Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import ava01 from "../../assets/all-images/MMem.jpg";
import ava02 from "../../assets/all-images/Fmem.jpg";
import ava03 from "../../assets/all-images/Fmem1.jpg";

const OUR__MEMBERS = [
  {
    name: "Ismaile Shaikh",
    role: "Project Lead",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: ava01,
  },

  {
    name: "Hrithik Prativadi Bhayankara",
    role: "Frontend",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: ava01,
  },

  {
    name: "Dhairya Shah",
    role: "Backend",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: ava01,
  },


  {
    name: "Tanmay Girish Mahindrakar",
    role: "Backend",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: ava01,
  },

  {
    name: "Priti Singh",
    role: "Backend",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: ava02,
  },

  {
    name: "Siona Crissel DSouza",
    role: "Frontend",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: ava02,
  },

  {
    name: "Annabelle Smith",
    role: "Backend",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: ava02,
  }
];

const OurMembers = () => {
  return (
    <Row className="justify-content-center">
      {OUR__MEMBERS.map((item, index) => (
        <Col lg="3" md="3" sm="4" xs="6" key={index} className="mb-4">
          <div className="single__member">
            <div className="single__member-img">
              <img src={item.imgUrl} alt="" className="w-100" />

              <div className="single__member-social">
                <Link to={item.fbUrl}>
                  <i class="ri-facebook-line"></i>
                </Link>
                <Link to={item.twitUrl}>
                  <i class="ri-twitter-line"></i>
                </Link>

                <Link to={item.linkedinUrl}>
                  <i class="ri-linkedin-line"></i>
                </Link>

                <Link to={item.instUrl}>
                  <i class="ri-instagram-line"></i>
                </Link>
              </div>
            </div>

            <h6 className="text-center mb-0 mt-3">{item.name}</h6>
            <p className="section__description text-center">
              {item.role}
            </p>
          </div>
        </Col>
      ))}
    </Row>
  );
};

export default OurMembers;
