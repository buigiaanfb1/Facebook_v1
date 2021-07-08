const express = require('express');
const setCollection = require('../../firebase/tools/setCollection');
const router = express.Router();

// @route   GET api/posts/global
// @desc    Add to Post Collection
// @access  Public
router.post('/global', async (req, res) => {
  console.log(req.body);
  const { addDoc } = setCollection('posts');
  const id = await addDoc(req.body);
  console.log(id);
  return res.status(200).json(id);
});

module.exports = router;
