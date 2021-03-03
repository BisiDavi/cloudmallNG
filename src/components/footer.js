import React, { useState } from "react";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import HomeIcon from "../icons/HomeIcon";
import StoreIcon from "../icons/StoreIcon";
import CartIcon from "../icons/CartIcon";
import OrderIcon from "../icons/OrderIcon";
// import style from "../styles/Footer.module.css";

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
});

export default function SimpleBottomNavigation() {
    const classes = useStyles();
    const [value, setValue] = useState(0);

    onClickHandler = (link) => {
        
    }

    return (
        <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            showLabels
            className={`${classes.root} fixed-bottom`}
        >
            <BottomNavigationAction
                label="Home"
                showLabel
                classes={{ selected: classes.selected }}
                icon={<HomeIcon />}
            />
            <BottomNavigationAction
                label="Stores"
                classes={{ selected: classes.selected }}
                showLabel
                icon={<StoreIcon />}
            />
            <BottomNavigationAction
                label="Cart"
                showLabel
                classes={{ selected: classes.selected }}
                icon={<CartIcon />}
            />
            <BottomNavigationAction
                label="Orders"
                classes={{ selected: classes.selected }}
                showLabel
                icon={<OrderIcon />}
            />
        </BottomNavigation>
    );
}
