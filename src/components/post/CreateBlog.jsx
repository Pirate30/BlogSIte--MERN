import {
  Box,
  Button,
  FormControl,
  InputBase,
  makeStyles,
  TextareaAutosize,
} from "@material-ui/core";
import { AddCircle } from "@material-ui/icons";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { createPost } from "../../api/api";

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
  form: {
    display: "flex",
    flexDirection: "row",
    marginTop: 10,
  },
  textfield: {
    flex: 1,
    margin: "0 25px",
    fontSize: 24,
  },
  textarea: {
    width: "100%",
    marginTop: "40px",
    fontSize: 20,
    border: "none",
    outline: "none",
  },
}));

const initialValues = {
  title: "",
  description: "",
  picture: "",
  username: "John's Blog",
  categories: "",
  createdDate: new Date(),
};

export default function CreateBlog() {
  const url =
    "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";

  const classes = useStyle();
  const history = useHistory();

  const [post, setPost] = useState(initialValues);

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handlePublish = async () => {
    await createPost(post);
    history.push("/");
  };

  return (
    <Box className={classes.container}>
      <img className={classes.image} src={url} alt="banner" />
      <FormControl className={classes.form}>
        <AddCircle fontSize="large" color="primary" />
        <InputBase
          onChange={(e) => handleChange(e)}
          name="title"
          className={classes.textfield}
          placeholder="Blog Title"
        />
        <Button
          onClick={() => handlePublish()}
          variant="contained"
          color="primary"
        >
          Publish
        </Button>
      </FormControl>
      <TextareaAutosize
        name="description"
        onChange={(e) => handleChange(e)}
        rowsMin={5}
        placeholder="Share Your Thoughts..."
        className={classes.textarea}
      />
    </Box>
  );
}
