import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { hamburger, man, heart, SidebarDrawer } from '../imports';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import homeStyle from '../styles/Home.module.css';

const Header = ({ isLoggedIn }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const userCurrentAddress = useSelector(state => state.location);
  const { address } = userCurrentAddress;

  console.log('address', address);

  const openHamburgerMenu = () => setOpenMenu(!openMenu);

  const closeHamburgerMenu = () => setOpenMenu(false);

  const isUserLoggedIn = () =>
    isLoggedIn ? (
      <img src={man} alt="user icon" />
    ) : (
      <Link href="/auth">
        <a>
          <span className="signin">
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
              <i className="fa fa-bars fa-2x" aria-hidden="true"></i>
            </div>
          </Col>
          <Col xs={7} className="d-block">
            <span>{address}</span>
          </Col>
          <Col xs={1} className="mr-3">
            {isUserLoggedIn()}
          </Col>
          <Col xs={1} className={`mr-1 ${homeStyle.heart}`}>
            <i className="fa fa-heart fa-2x" aria-hidden="true"></i>
          </Col>
        </Row>
      </Container>
      {openMenu ? <SidebarDrawer onClose={closeHamburgerMenu} /> : null}
      <style jsx>
        {`
          .header {
            top: 0px;
            background: #ffce85 !important;
            z-index: 100000;
            width: 100%;
          }
          .menu-hamburger {
            cursor: pointer;
          }
          .heart {
            cursor: pointer;
          }
          .heart svg {
            color: #d12e2e !important;
          }
        `}
      </style>
    </section>
  );
};

export default Header;
