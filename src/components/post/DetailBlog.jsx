import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import { Delete, Edit } from "@material-ui/icons";
import { Link } from "react-router-dom";

const useStyle = makeStyles((theme) => ({
  container: {
    padding: "0 20px",
  },
  image: {
    width: "100%",
    height: "50vh",
    objectFit: "cover",
  },
  icons: {
    float: "right",
  },
  icon: {
    margin: 5,
    border: "1px solid #878787",
    padding: 5,
    borderRadius: 5,
  },
  heading: {
    fontSize: 35,
    fontWeight: 700,
    textAlign: "center",
    marginTop: "50px",
  },
  subheading: {
    color: "#878787",
    display: "flex",
    flexDirection: "row",
    margin: "20px 0",
  },
}));

export default function DetailBlog() {
  const classes = useStyle();
  const url =
    "https://images.pexels.com/photos/735911/pexels-photo-735911.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";

  return (
    <Box className={classes.container}>
      <img className={classes.image} src={url} alt="" />
      <Box className={classes.icons}>
        <Link to="/update">
          <Edit className={classes.icon} color="action" />
        </Link>
        <Delete className={classes.icon} color="error" />
      </Box>
      <Typography className={classes.heading}>The Blog Title</Typography>
      <Box className={classes.subheading} className={classes.subheading}>
        <Typography>
          Autor: <span style={{ fontWeight: "600" }}> Jhon Rodriguez </span>
        </Typography>
        <Typography style={{ marginLeft: "auto" }}>11-10-21</Typography>
      </Box>
      <Typography>
        Why do we use it? It is a long established fact that a reader will be
        distracted by the readable content of a page when looking at its layout.
        The point of using Lorem Ipsum is that it has a more-or-less normal
        distribution of letters, as opposed to using 'Content here, content
        here', making it look like readable English. Many desktop publishing
        packages and web page editors now use Lorem Ipsum as their default model
        text, and a search for 'lorem ipsum' will uncover many web sites still
        in their infancy. Various versions have evolved over the years,
        sometimes by accident, sometimes on purpose (injected humour and the
        like).
      </Typography>
    </Box>
  );
}
