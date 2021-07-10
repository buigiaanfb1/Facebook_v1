const express = require('express');
const setCollection = require('../../firebase/tools/setCollection');
const getCollection = require('../../firebase/tools/getCollection');
const router = express.Router();

// @route   POST api/posts/global
// @desc    Add to Post Collection
// @access  Public
router.post('/global', async (req, res) => {
  const { addDoc } = setCollection('posts');
  const id = await addDoc(req.body);
  return res.status(200).json(id);
});

// @route   POST api/posts/reaction
// @desc    Add to post reaction
// @access  Public
router.post('/reaction', async (req, res) => {
  const { id, userID, reaction, userInfo } = req.body;
  const results = await getCollection('users', userID);
  // find posts
  let post = results.posts.filter((post) => {
    return post.id === id;
  });
  // add people to reaction array
  post[0].reaction[reaction] = [...post[0].reaction[reaction], userInfo];
  console.log(post[0].reaction);
  // auto increment
  post[0].reaction['total'] = post[0].reaction['total'] + 1;
  console.log(post[0].reaction['total']);
  const { updateDoc } = setCollection('users');
  await updateDoc(post, userID);

  return res.status(200).json('success');
});

module.exports = router;
