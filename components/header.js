import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { hamburger, man, heart } from "../imports";
import Link from "next/link";
import homeStyle from "../styles/Home.module.css";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenu = () => setOpenMenu(true);

  return (
    <section className="position-relative">
      <Container className={`${homeStyle.header} py-2 px-1 m-auto`} fluid>
        <Row>
          <Col xs={1} className="ml-4 mr-3">
            <div onClick={handleMenu} className="menu-hamburger">
              <img src={hamburger} alt="menu bar icon" />
            </div>
          </Col>
          <Col xs={7} className="d-block">
            <span>Now</span>
          </Col>
          <Col xs={1} className="mr-2">
            <img src={man} alt="user icon" />
          </Col>
          <Col xs={1}>
            <img src={heart} alt="heart icon" />
          </Col>
        </Row>
      </Container>
      {openMenu ? (
        <div className="position-absolute">
          <SidebarDrawer />
        </div>
      ) : null}
      <style jsx>
        {`
          .menu-hamburger {
            cursor: pointer;
          }
        `}
      </style>
    </section>
  );
};

export default Header;
