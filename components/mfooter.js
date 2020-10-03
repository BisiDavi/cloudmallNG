import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeIcon from "@material-ui/icons/Home";
import StoreIcon from "@material-ui/icons/Store";
import LocalGroceryStoreIcon from "@material-ui/icons/LocalGroceryStore";
import { list } from "../imports";

const useStyles = makeStyles({
  root: {
    width: "100%"
  },
  orders: {
    width: "25px"
  }
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Home" icon={<HomeIcon />} />
      <BottomNavigationAction label="Stores" icon={<StoreIcon />} />
      <BottomNavigationAction label="Cart" icon={<LocalGroceryStoreIcon />} />
      <BottomNavigationAction
        label="Orders"
        icon={<img src={list} className={classes.orders} alt="order icon" />}
      />
    </BottomNavigation>
  );
}
