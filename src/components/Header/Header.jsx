import React, { useRef } from 'react';
import { Container, Col } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import "../../../src/styles/header.css";
import carLogo from "../../assets/all-images/better-img/Quick Wheels Logo Cut.png";

const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
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

const Header = () => {
  const menuRef = useRef(null);

  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");

  return (
    <header className="header">

      {/* ========== main navigation =========== */}

      <div className="main__navbar">
        <Container>
          <div className="navigation__wrapper d-flex align-items-center justify-content-between">
            <span className="mobile__menu">
              <i class="ri-menu-line" onClick={toggleMenu}></i>
            </span>

            <Col lg="4" md="3" sm="4">
              <div className="logo">
                <span>
                  <Link to="/home" className=" d-flex align-items-center gap-2">
                    <img src={carLogo} alt="logo" />
                  </Link>
                </span>
              </div>
            </Col>

            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <div className="menu">
                {navLinks.map((item, index) => (
                  <NavLink
                    to={item.path}
                    className={(navClass) =>
                      navClass.isActive ? "nav__active nav__item" : "nav__item"
                    }
                    key={index}
                  >
                    {item.display}
                  </NavLink>
                ))}
              </div>
            </div>

            <div className="header__top__right d-flex align-items-center justify-content-end gap-3">
              <Link to="/Login" className=" d-flex align-items-center gap-1">
                <i class="ri-login-circle-line"></i> Login
              </Link>

              <Link to="/Register" className=" d-flex align-items-center gap-1">
                <i class="ri-user-line"></i> Register
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;