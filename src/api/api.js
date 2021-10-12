import axios from "axios";

const url = "http://127.0.0.1:8800";

export const createPost = async (post) => {
  try {
    return await axios.post(`${url}/create`, post);
  } catch (error) {
    console.log("error ocuured while creating tthe post", error);
  }
};
