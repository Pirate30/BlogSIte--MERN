import axios from "axios";

const url = "http://127.0.0.1:8800";

export const createPost = async (post) => {
  try {
    return await axios.post(`${url}/create`, post);
  } catch (error) {
    console.log("error ocuured while creating tthe post", error);
  }
};

export const getAllPosts = async (param) => {
  try {
    let result = await axios.get(`${url}/blogs${param}`);
    console.log("result..", result);
    return result;
  } catch (error) {
    console.log("error while getting the all posts", error);
  }
};

export const getBlogDetails = async (id) => {
  try {
    let result = await axios.get(`${url}/blogs/${id}`);
    return result;
  } catch (error) {
    console.log("error while fetching blog details", error);
  }
};

export const updatePost = async (id, post) => {
  try {
    await axios.post(`${url}/blogs/update/${id}`, post);
  } catch (error) {
    console.log("error while updating the blog", error);
  }
};

export const deletBlog = async (id) => {
  try {
    await axios.delete(`${url}/blogs/delete/${id}`);
  } catch (error) {
    console.log(error);
  }
};

export const uploadFile = async (data) => {
  try {
    return await axios.post(`${url}/blogs/file/upload`, data);
  } catch (error) {
    console.log("got error while uploading the file", error);
  }
};
