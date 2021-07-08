import axios from 'axios';

export const addPostToPostsCollection = async (post) => {
  try {
    const res = await axios({
      url: 'http://localhost:5000/api/posts/global',
      data: post,
      method: 'POST',
    });
    return res.data;
  } catch (err) {
    console.log(err.message);
  }
};
