import axios from 'axios';

export const addPostToPostsAndUsersPostCollectionServices = async (post) => {
  try {
    const res = await axios({
      url: '/api/posts/global',
      data: post,
      method: 'POST',
    });
    return res.status;
  } catch (err) {
    console.log(err.message);
  }
};
