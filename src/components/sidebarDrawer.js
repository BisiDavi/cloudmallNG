import React from "react";
import { profileIcon, ProfileImg, walletIcon, inviteIcon } from "../imports";

const SidebarDrawer = props => {
  const menuLink = [
    { id: 1, name: "Profile", image: profileIcon, link: "" },
    { id: 2, name: "Wallet", image: walletIcon, link: "" },
    {
      id: 3,
      name: "Address",
      faImage: <i class="fas fa-address-book fa-2x"></i>,
      link: ""
    },
    {
      id: 4,
      name: "Settings",
      faImage: <i class="fas fa-cog fa-2x"></i>,
      link: ""
    },
    { id: 5, name: "Invite friends", image: inviteIcon, link: "" },
    {
      id: 6,
      name: "Reviews",
      faImage: <i class="fas fa-comment-alt-edit fa-2x"></i>,
      link: ""
    },
    {
      id: 7,
      name: "Contact us",
      faImage: <i class="fas fa-phone-square-alt fa-2x"></i>,
      link: ""
    },
    {
      id: 8,
      name: "Help",
      faImage: <i class="fas fa-question-circle fa-2x"></i>,
      link: ""
    },
    {
      id: 9,
      name: "Logout",
      faImage: <i class="fas fa-sign-out-alt fa-2x"></i>,
      link: ""
    }
  ];

  return (
    <div className="SidebarDrawer d-flex">
      <div className="profile w-50 h-100 bg-white">
        <div className="profile-img">
          <img src={ProfileImg} alt="cloudmall profile logo" />
        </div>
        <div className="menu">
          <ul className="sidebar-menu">
            {menuLink.map(menu => (
              <li className="d-flex" key={menu.id}>
                {menu.image ? (
                  <img src={menu.image} />
                ) : (
                  <span>{menu.faImage}</span>
                )}
                <h6>{menu.name}</h6>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="overlay" onClick={props.onClose}></div>
      <style jsx>
        {`
          .profile-img img {
            height: 100px !important;
            margin: auto !important;
            display: flex;
          }
          .SidebarDrawer {
            z-index: 100000;
            left: 0px;
            position: fixed;
            top: 0px;
            width: 100vw !important;
            height: 100vh !important;
            transition: 0.5s ease-in-out;
          }
          .profile {
            z-index: 1200;
          }
          .overlay {
            position: absolute;
            background: rgba(0, 0, 0, 0.5);
            z-index: 1005;
            left: 0px;
            top: 0px;
            width: 100vw !important;
            height: 100vh !important;
          }
          .menu {
            background-color: white !important;
          }
          li.d-flex {
            height: 40px;
            margin-bottom: 10px !important;
          }
          li.d-flex img {
            margin-right: 25px !important;
            margin-left: 15px !important;
            height: 100%;
          }
          li.d-flex span {
            margin-right: 35px !important;
            margin-left: 15px !important;
            height: 100%;
          }
          .d-flex span svg {
            width: 30px !important;
            height: 30px !important;
          }
          li.d-flex h6 {
            display: flex;
            align-items: center;
          }
        `}
      </style>
    </div>
  );
};

export default SidebarDrawer;
