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
});

export default function Categories() {
  const classes = useStyle();

  return (
    <div>
      <Button variant="contained" className={classes.create}>
        Create Post
      </Button>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>All Category</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {categories.map((cat) => (
            <TableRow>
              <TableCell>{cat}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
