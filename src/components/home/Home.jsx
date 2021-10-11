import { Grid } from "@material-ui/core";
import React from "react";
import Banner from "./Banner";
import Categories from "./Categories";
import Posts from "./Posts";
import { makeStyles } from "@material-ui/core";

// const useStyles = makeStyles({
//   postsContainer: {
//     display: "flex",
//     flexWrap: "wrap",
//   },
// });

export default function Home() {
  //   const classes = useStyles();
  return (
    <div>
      <Banner />
      <Grid container>
        <Grid item lg={2} xs={12} sm={2}>
          <Categories />
        </Grid>
        <Grid container item lg={10} xs={12} sm={10}>
          <Posts />
        </Grid>
      </Grid>
    </div>
  );
}
