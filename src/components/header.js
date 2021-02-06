import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  
  faHeart,
  faAngleDown
} from '@fortawesome/free-solid-svg-icons';
import { man, SidebarDrawer, hamburger, loginIcon } from '../imports';
import Link from 'next/link';
import homeStyle from '../styles/Home.module.css';

const Header = ({ isLoggedIn }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [userAddress, setAddress] = useState('');
  const userCurrentAddress = useSelector(state => state.location);
  const { location } = userCurrentAddress;

  useEffect(() => {
    getAddressFromStorage();
  }, [userAddress]);

  console.log('location', location);
  console.log('address', userAddress);

  const openHamburgerMenu = () => setOpenMenu(!openMenu);

  const closeHamburgerMenu = () => setOpenMenu(false);

  const getAddressFromStorage = () => {
    let address = window.localStorage.getItem('user_address');
    setAddress(address);
  };

  const isUserLoggedIn = () =>
    isLoggedIn ? (
      <img src={man} className={homeStyle.headerIcon} alt="user icon" />
    ) : (
      <Link href="/auth">
        <a>
          <span className="signin">
            <img className={homeStyle.headerIcon} src={loginIcon} alt="login" />
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
              <img src={hamburger} alt="login" />
            </div>
          </Col>
          <Col xs={6} className={`${homeStyle.userAddress} mr-2`}>
            <span className="userAddress">
              <p>Now</p>
              <div className="location">
                <p>{userAddress}</p>
                <FontAwesomeIcon icon={faAngleDown} size="2x" />
              </div>
            </span>
            <span></span>
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
          .userAddress{
            display:flex;
            flex-direction:column;
            color: #3E4044;
            font-family: 'Roboto', sans-serif
            font-size:12px;
          }
          .userAddress p{
            font-weight: 100;
            margin: 0px;
            margin-left: 10px;
          }
          .location p{
            font-weight:500;
            margin: 0px;
            text-overflow: ellipsis;
            overflow: auto;
            white-space: nowrap;
            width: 150px;
            height: 50px;
            margin-left: 10px;
          }
          .location{
            display: flex;
            align-items: center;
          }
          .location svg {
          margin-top: -25px;
          margin-left: 10px;
        }
          .heart svg {
            color: #d12e2e;
            margin-left: 15px;
            margin-top: 15px;
          }
        `}
      </style>
    </section>
  );
};

export default Header;
