import React from "react";
import { profileIcon, walletIcon } from "../imports";

const SidebarDrawer = () => {
  const menuLink = [
    { id: 1, name: "Profile", image: profileIcon, link: "" },
    { id: 2, name: "Wallet", image: walletIcon, link: "" },
    {
      id: 3,
      name: "Address",
      faImage: <i class="fas fa-address-book"></i>,
      link: ""
    },
    {
      id: 4,
      name: "Settings",
      faImage: <i class="fas fa-cog"></i>,
      link: ""
    },
    { id: 5, name: "Invite friends", image: inviteIcon, link: "" },
    {
      id: 6,
      name: "Reviews",
      faImage: <i class="fas fa-comment-alt-edit"></i>,
      link: ""
    },
    {
      id: 7,
      name: "Contact us",
      faImage: <i class="fas fa-phone-square-alt"></i>,
      link: ""
    },
    {
      id: 8,
      name: "Help",
      faImage: <i class="fas fa-question-circle"></i>,
      link: ""
    },
    {
      id: 9,
      name: "Logout",
      faImage: <i class="fas fa-sign-out-alt"></i>,
      link: ""
    }
  ];

  return (    
    <div className="SidebarDrawer h-100">
      <div className="profile w-25 h-100 bg-white">
        <div className="profile-img">
          <img src={profileImg} alt="cloudmall profile logo" />
        </div>
        <div className="menu">
          <ul className="sidebar-menu">
            {menuLink.map(menu => {
              <li className="d-flex" key={menu.id}>
                {menu.image ? (
                  <img src={menu.image} />
                ) : (
                  <span>{menu.faImage}</span>
                )}
                <h6>{menu.name}</h6>
              </li>;
            })}
          </ul>
        </div>
      </div>
      <style jsx>
        {`
          .SidebarDrawer{
            background: rgba(0,0,0,0.5)
          }
        `}
      </style>
    </div>
  );
};

export default SidebarDrawer;
