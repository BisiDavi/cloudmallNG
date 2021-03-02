import React from "react";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import Link from "next/link";
import HomeIcon from "../icons/HomeIcon";
import StoreIcon from "../icons/StoreIcon";
import CartIcon from "../icons/CartIcon";
import OrderIcon from "../icons/OrderIcon";
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
            className={`${style.BottomNav} fixed-bottom`}
        >
            <Link href="/home">
                <a>
                    <BottomNavigationAction
                        label="Home"
                        showLabel
                        icon={<HomeIcon />}
                    />
                </a>
            </Link>
            <Link href="/stores">
                <a>
                    <BottomNavigationAction
                        label="Stores"
                        showLabel
                        icon={<StoreIcon />}
                    />
                </a>
            </Link>
            <Link href="/cart">
                <a>
                    <BottomNavigationAction
                        label="Cart"
                        showLabel
                        icon={<CartIcon />}
                    />
                </a>
            </Link>
            <Link href="/orders">
                <a>
                    <BottomNavigationAction
                        label="Orders"
                        showLabel
                        icon={<OrderIcon />}
                    />
                </a>
            </Link>
        </BottomNavigation>
    );
}
