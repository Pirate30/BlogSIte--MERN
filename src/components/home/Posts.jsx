import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { getAllPosts } from "../../api/api";
import Post from "./Post";

export default function Posts() {
  // let posts = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchBlogs = async () => {
      let data = await getAllPosts(search);
      try {
        console.log("the data..", data.data);
        setPosts(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBlogs();
  }, [search]);

  return posts.map((p) => (
    <Grid item lg={3} sm={4} xs={12}>
      <Link
        to={`/details/${p._id}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <Post post={p} />
      </Link>
    </Grid>
  ));
}
