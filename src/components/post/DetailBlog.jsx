import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React, { useEffect, useState } from "react";
import { Delete, Edit } from "@material-ui/icons";
import { Link, useHistory } from "react-router-dom";
import { deletBlog, getBlogDetails } from "../../api/api";

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
  link: {
    textDecoration: "none",
    color: "inherit",
  },
}));

export default function DetailBlog(props) {
  const classes = useStyle();
  const url =
    "https://images.pexels.com/photos/735911/pexels-photo-735911.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";

  const [post, setPost] = useState({});
  const history = useHistory();
  // console.log("params..", props);
  useEffect(() => {
    const getData = async () => {
      let data = await getBlogDetails(props.match.params.id);
      // console.log(data);
      setPost(data.data);
    };
    getData();
  }, []);

  const deletPost = async () => {
    await deletBlog(post._id);
    history.push("/");
  };

  return (
    <Box className={classes.container}>
      <img className={classes.image} src={url} alt="" />
      <Box className={classes.icons}>
        <Link to={`/update/${post._id}`}>
          <Edit className={classes.icon} color="action" />
        </Link>
        <Delete
          onClick={() => deletPost()}
          className={classes.icon}
          color="error"
        />
      </Box>
      <Typography className={classes.heading}>{post.title}</Typography>
      <Box className={classes.subheading} className={classes.subheading}>
        <Link className={classes.link} to={`/?username=${post.username}`}>
          <Typography>
            Autor: <span style={{ fontWeight: "600" }}> {post.username} </span>
          </Typography>
        </Link>
        <Typography style={{ marginLeft: "auto" }}>
          {new Date(post.createdDate).toDateString()}
        </Typography>
      </Box>
      <Typography>{post.description}</Typography>
    </Box>
  );
}
