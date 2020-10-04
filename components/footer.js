import React from "react";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import Link from "next/link";
import HomeIcon from "@material-ui/icons/Home";
import StoreIcon from "@material-ui/icons/Store";
import LocalGroceryStoreIcon from "@material-ui/icons/LocalGroceryStore";
import { list } from "../imports";
import style from "../styles/Footer.module.css";

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={style.BottomNav}
    >
      <Link href="/home">
        <a>
          <BottomNavigationAction label="Home" icon={<HomeIcon />} />
        </a>
      </Link>
      <Link href="/stores">
        <a>
          <BottomNavigationAction label="Stores" icon={<StoreIcon />} />
        </a>
      </Link>
      <Link href="/cart">
        <a>
          <BottomNavigationAction
            label="Cart"
            icon={<LocalGroceryStoreIcon />}
          />
        </a>
      </Link>
      <Link href="/orders">
        <a>
          <BottomNavigationAction
            label="Orders"
            showLabel
            icon={<img src={list} className={style.orders} alt="order icon" />}
          />
        </a>
      </Link>
    </BottomNavigation>
  );
}
