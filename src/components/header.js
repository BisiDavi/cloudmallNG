import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faSignInAlt,
  faHeart
} from '@fortawesome/free-solid-svg-icons';
import { man, SidebarDrawer } from '../imports';
import Link from 'next/link';
import homeStyle from '../styles/Home.module.css';

const Header = ({ isLoggedIn }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const userCurrentAddress = useSelector(state => state.location);
  const { location } = userCurrentAddress;

  console.log('address', location);

  const openHamburgerMenu = () => setOpenMenu(!openMenu);

  const closeHamburgerMenu = () => setOpenMenu(false);

  const userAddress = localStorage.getItem('user_default_address')
  const currentAddress = location ? location : userAddress
  const isUserLoggedIn = () =>
    isLoggedIn ? (
      <img src={man} alt="user icon" />
    ) : (
      <Link href="/auth">
        <a>
          <span className="signin">
            <FontAwesomeIcon icon={faSignInAlt} size="2x" />
          </span>
        </a>
      </Link>
    );

  return (
    <section className="header position-fixed">
      <Container className={`${homeStyle.header} py-2 px-1 m-auto`} fluid>
        <Row>
          <Col xs={1} className="ml-3 mr-1">
            <div onClick={openHamburgerMenu} className="menu-hamburger">
              <FontAwesomeIcon icon={faBars} size="2x" />
            </div>
          </Col>
          <Col xs={6} className={`${homeStyle.userAddress} mr-2`}>
            <span>{currentAddress}</span>
          </Col>
          <Col xs={1} className="mr-3">
            {isUserLoggedIn()}
          </Col>
          <Col xs={1} className={`mr-1 ${homeStyle.heart}`}>
            <FontAwesomeIcon icon={faHeart} size="2x" />
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
