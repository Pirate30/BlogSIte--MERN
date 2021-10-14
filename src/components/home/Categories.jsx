import React from "react";
import {
  Button,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { categories } from "../../constants/data";
import { Link } from "react-router-dom";

const useStyle = makeStyles({
  create: {
    margin: 20,
    background: "#6495ed",
    color: "#fff",
    width: "80%",
  },
  table: {
    border: "1px solid lightgray",
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
});

export default function Categories() {
  const classes = useStyle();

  return (
    <div>
      <Link className={classes.link} to="/create">
        <Button variant="contained" className={classes.create}>
          Create Post
        </Button>
      </Link>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>
              <Link to="/" className={classes.link}>
                All Category
              </Link>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {categories.map((cat) => (
            <TableRow>
              <TableCell>
                <Link to={`/?categories=${cat}`} className={classes.link}>
                  {cat}
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
