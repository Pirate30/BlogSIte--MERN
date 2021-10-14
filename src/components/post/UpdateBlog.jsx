import {
  Box,
  Button,
  FormControl,
  InputBase,
  makeStyles,
  TextareaAutosize,
} from "@material-ui/core";
import { AddCircle } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { getBlogDetails, updatePost } from "../../api/api";

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

export default function UpdateBlog(props) {
  const url =
    "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";

  const classes = useStyle();
  const history = useHistory();

  const [post, setPost] = useState(initialValues);
  useEffect(() => {
    const getData = async () => {
      const data = await getBlogDetails(props.match.params.id);
      setPost(data.data);
    };
    getData();
  }, [props.match.params.id]);

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  // console.log(post);

  const handleUpdate = async () => {
    await updatePost(props.match.params.id, post);
    history.push(`/details/${props.match.params.id}`);
  };

  return (
    <Box className={classes.container}>
      <img className={classes.image} src={url} alt="banner" />
      <FormControl className={classes.form}>
        <AddCircle fontSize="large" color="primary" />
        <InputBase
          className={classes.textfield}
          placeholder="Blog Title"
          name="title"
          value={post.title}
          onChange={(e) => handleChange(e)}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleUpdate()}
        >
          Update
        </Button>
      </FormControl>
      <TextareaAutosize
        rowsMin={5}
        placeholder="Share Your Thoughts..."
        value={post.description}
        name="description"
        className={classes.textarea}
        onChange={(e) => handleChange(e)}
      />
    </Box>
  );
}
