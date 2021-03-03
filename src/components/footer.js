import React, { useState, useEffect } from "react";
import Navlink from "./Navlink";
import { useRouter } from "next/router";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { HomeIcon, StoreIcon, CartIcon, OrderIcon } from "../icons";
import FooterLink from "./FooterLink";

const useStyles = makeStyles({
    root: {
        width: "100%",
    },
    selected: {
        color: "#F29100",
        "& svg path": {
            fill: "#F29100",
        },
    },
    inactive: {
        color: "gray",
        "& svg path": {
            fill: "gray",
        },
    },
});

export default function SimpleBottomNavigation() {
    const classes = useStyles();
    const router = useRouter();
    const pathName = router.pathname;
    const [value, setValue] = useState(pathName);

    const activeLink = (link) => {
        console.log("route value", router.pathname.includes(link));
        console.log(")route path", router.pathname);
        return router.pathname.includes(link)
            ? classes.selected
            : classes.inactive;
    };

    const activeButton = (event, newValue) => setValue(newValue);

    return (
        <BottomNavigation
            value={value}
            onChange={activeButton}
            showLabels
            className={`${classes.root} fixed-bottom`}
        >
            <Navlink linkTo="/home">
                <BottomNavigationAction
                    label="Home"
                    value="/home"
                    showLabel
                    className={activeLink("/home")}
                    icon={<HomeIcon />}
                />
            </Navlink>
            <Navlink linkTo="/stores">
                <BottomNavigationAction
                    label="Stores"
                    value="/stores"
                    className={activeLink("/stores")}
                    showLabel
                    icon={<StoreIcon />}
                />
            </Navlink>
            <Navlink linkTo="/cart">
                <BottomNavigationAction
                    showLabel
                    label="Cart"
                    value="/cart"
                    icon={<CartIcon />}
                    className={activeLink("/cart")}
                />
            </Navlink>
            <Navlink linkTo="/orders">
                <BottomNavigationAction
                    label="Orders"
                    className={activeLink("/orders")}
                    showLabel
                    value="/orders"
                    icon={<OrderIcon />}
                />
            </Navlink>
        </BottomNavigation>
    );
}
