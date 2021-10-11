import { Box, Typography, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  container: {
    height: 350,
    margin: 10,
    border: "1px solid lightgray",
    borderRadius: 10,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& > *": {
      padding: "0 5px 5px 5px",
    },
  },
  image: {
    height: 180,
    width: "100%",
    objectFit: "cover",
    borderRadius: "10px 10px 0 0 ",
  },
  text: {
    color: "#878787",
    fontSize: 12,
  },
  heading: {
    fontSize: 18,
    fontWeight: 600,
  },
  details: {
    fontSize: 14,
    wordBreak: "break-word",
  },
});

export default function Post() {
  const classes = useStyles();

  const url =
    "https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
  return (
    <Box className={classes.container}>
      <img src={url} alt="post" className={classes.image} />
      <Typography className={classes.text}>Sci-Fi</Typography>
      <Typography className={classes.heading}>John's Blogs</Typography>
      <Typography className={classes.text}>John Caestro</Typography>
      <Typography className={classes.details}>
        Heyy folks, this is Jhon...skfjsjkbvkbkdfkvbkdfbvkbdfkvbdkbvkdbfkvbdk
      </Typography>
    </Box>
  );
}
