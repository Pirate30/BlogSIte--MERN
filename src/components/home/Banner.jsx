import React from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";
const useStyles = makeStyles({
  image: {
    background: `url(${`https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`}) center/55% repeat-x #000 `,
    width: "100%",
    height: "50vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    "& :first-child": {
      color: "white",
      fontSize: 60,
      lineHeight: 1,
    },
    "& :last-child": {
      background: "#ffffff",
      fontSize: 25,
    },
  },
});

export default function Banner() {
  const classes = useStyles();

  const url =
    "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";

  return (
    <Box className={classes.image}>
      <Typography>BLOG</Typography>
      <Typography>Infinity Blogs</Typography>
    </Box>
  );
}
