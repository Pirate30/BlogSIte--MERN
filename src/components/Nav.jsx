import React from "react";
import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useOktaAuth } from "@okta/okta-react";

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
  const history = useHistory();

  const { oktaAuth, authState } = useOktaAuth();

  if (!authState && authState.isPending) return null;

  const login = async () => history.push("/login");

  const logout = async () => oktaAuth.signOut();

  const button = authState.isAuthenticated ? (
    <button onClick={logout}>Logout</button>
  ) : (
    <button onClick={login}>Login</button>
  );

  return (
    <div>
      <AppBar className={classes.component}>
        <Toolbar className={classes.container}>
          <Link to="/" className={classes.link}>
            <Typography>Home</Typography>{" "}
          </Link>
          <Typography>About</Typography>
          <Typography>Contact</Typography>
          <Typography>{button}</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
