import React from 'react';
import Link from 'next/link';
import { profileIcon, ProfileImg, walletIcon, inviteIcon } from '../imports';

const SidebarDrawer = props => {
  const menuLink = [
    {
      id: 1,
      name: 'Profile',
      icon: 'fas fa-user-circle',
      link: '#'
    },
    {
      id: 2,
      name: 'Wallet',
      icon: 'fas fa-wallet',
      link: '/wallet'
    },
    {
      id: 3,
      name: 'Address',
      icon: 'fas fa-address-book fa-2x',
      link: '/addressbook'
    },
    {
      id: 4,
      name: 'Settings',
      icon: 'fas fa-cog fa-2x',
      link: '/settings'
    },
    {
      id: 5,
      name: 'Invite friends',
      icon: 'fas fa-envelope-open-text',
      link: '/invitefriends'
    },
    {
      id: 6,
      name: 'Reviews',
      icon: 'fas fa-comment-alt-edit fa-2x',
      link: ''
    },
    {
      id: 7,
      name: 'Contact us',
      icon: 'fas fa-phone-square-alt fa-2x',
      link: ''
    },
    {
      id: 8,
      name: 'Help',
      icon: 'fas fa-question-circle fa-2x',
      link: ''
    },
    {
      id: 9,
      name: 'Logout',
      icon: 'fas fa-sign-out-alt fa-2x',
      link: ''
    }
  ];

  return (
    <div className="SidebarDrawer d-flex">
      <div className="profile h-100 bg-white">
        <div className="profile-img">
          <img src={ProfileImg} alt="cloudmall profile logo" />
          <p>1000.00</p>
        </div>
        <div className="menu">
          <ul className="sidebar-menu">
            {menuLink.map(menu => (
              <span key={menu.id}>
                <Link href={menu.link}>
                  <a className="text-decoration-none">
                    <li className="d-flex">
                      <span>
                        <i className={menu.icon}></i>
                      </span>
                      <h6>{menu.name}</h6>
                    </li>
                  </a>
                </Link>
              </span>
            ))}
          </ul>
        </div>
      </div>
      <div className="overlay" onClick={props.onClose}></div>
      <style jsx>
        {`
          ul span a:hover {
            color: #fd4b13;
          }
          .profile-img {
            flex-direction: column;
          }
          .profile-img p {
            font-family: 'Roboto', sans-serif;
            font-style: normal;
            font-weight: bold;
            font-size: 14px;
            line-height: 16px;
            text-align: center;
            margin-top: 15px;
            color: #3e4044;
          }

          .profile-img img {
            height: 100px;
            margin: 10px auto;
            display: flex;
          }
          .SidebarDrawer {
            z-index: 100000;
            left: 0px;
            position: fixed;
            top: 47px;
            width: 100vw;
            height: 100vh;
            transition: 0.5s ease-in-out;
          }
          .profile {
            z-index: 1200;
            padding-top: 50px;
            width: 250px;
          }
          .overlay {
            position: absolute;
            background: rgba(0, 0, 0, 0.5);
            z-index: 1005;
            left: 0px;
            top: 0px;
            width: 100vw;
            height: 100vh;
          }
          .menu {
            background-color: white;
          }
          li.d-flex {
            height: 30px;
            margin: 10px 0px;
            padding: 0px 15px;
          }
          li.d-flex img {
            margin-right: 25px;
            margin-left: 15px;
            height: 100%;
          }
          li.d-flex span {
            margin: 0px 35px 0px 15px;
            height: 100%;
          }
          .d-flex span svg {
            width: 30px;
            height: 30px;
          }
          li.d-flex h6 {
            display: flex;
            align-items: center;
            margin: 0px;
            font-family: 'Roboto', sans-serif;
            font-style: normal;
            font-weight: bold;
            font-size: 14px;
            line-height: 16px;
          }
        `}
      </style>
    </div>
  );
};

export default SidebarDrawer;
