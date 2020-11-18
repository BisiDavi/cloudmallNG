import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { hamburger, man, heart, SidebarDrawer } from "../imports";
import { connect } from "react-redux";
import Link from "next/link";
import homeStyle from "../styles/Home.module.css";

const Header = ({ isLoggedIn }) => {
  const [openMenu, setOpenMenu] = useState(false);

  const openHamburgerMenu = () => setOpenMenu(!openMenu);

  const closeHamburgerMenu = () => setOpenMenu(false);

  const isUserLoggedIn = () =>
    isLoggedIn ? (
      <img src={man} alt="user icon" />
    ) : (
      <Link href="/auth">
        <a>
          <span>
            <i className="fa fa-sign-in-alt fa-2x mr-3"></i>
          </span>
        </a>
      </Link>
    );

  return (
    <section className="header position-fixed">
      <Container className={`${homeStyle.header} py-2 px-1 m-auto`} fluid>
        <Row>
          <Col xs={1} className="ml-3 mr-3">
            <div onClick={openHamburgerMenu} className="menu-hamburger">
              <img src={hamburger} alt="menu bar icon" />
            </div>
          </Col>
          <Col xs={7} className="d-block">
            <span>Now</span>
          </Col>
          <Col xs={1} className="mr-3">
            {isUserLoggedIn()}
          </Col>
          <Col xs={1} className="mr-1 heart">
            <img src={heart} alt="heart icon" />
          </Col>
        </Row>
      </Container>
      {openMenu ? <SidebarDrawer onClose={closeHamburgerMenu} /> : null}
      <style jsx>
        {`
          .header {
            top: 0px;
            background: white !important;
            z-index: 100000;
          }
          .menu-hamburger {
            cursor: pointer;
          }
          .heart {
            cursor: pointer;
          }
        `}
      </style>
    </section>
  );
};

const mapStateToProps = state => {
  return {
    isLoggedIn: state.isLoggedIn
  };
};

export default connect(mapStateToProps)(Header);
