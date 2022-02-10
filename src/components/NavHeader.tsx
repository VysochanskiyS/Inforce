import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
  headerNav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "0 30px",
    width: "100%",
  },
  homeNav: {
    display: "flex",
    fontSize: "22px",
  },
  navItem: {
    marginRight: "20px",
  },
});
export const NavHeader = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <div className={classes.headerNav}>
          <div className={classes.homeNav}>
            <div className={classes.navItem}>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                List
              </NavLink>
            </div>
            <div className={classes.navItem}>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to="/basket"
              >
                Basket
              </NavLink>
            </div>
          </div>
          <div>
            <Typography variant="h6" color="inherit" component="div">
              <span style={{ cursor: "pointer" }}>Inforce</span>
            </Typography>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};
