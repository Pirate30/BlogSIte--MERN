import React from "react";
import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  component: {
    background: "#ffffff",
    color: "black",
  },
  container: {
    justifyContent: "center",
    "& > *": {
      padding: 20,
    },
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
});

export default function Nav() {
  const classes = useStyles();
  return (
    <div>
      <AppBar className={classes.component}>
        <Toolbar className={classes.container}>
          <Link to="/" className={classes.link}>
            <Typography>Home</Typography>{" "}
          </Link>
          <Typography>About</Typography>
          <Typography>Contact</Typography>
          <Typography>Login</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
