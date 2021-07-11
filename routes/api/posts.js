const express = require('express');
const setCollection = require('../../firebase/tools/setCollection');
const getCollection = require('../../firebase/tools/getCollection');
const router = express.Router();

// @route   POST api/posts/global
// @desc    Add to Post Collection
// @access  Public
router.post('/global', async (req, res) => {
  const { addDoc, addDocSubCollection } = setCollection('posts');
  // add vô collection user-posts
  const idUserPostsSubCollection = await addDocSubCollection(
    'user-posts',
    req.body.userID,
    'posts',
    req.body
  );
  // add vô collection posts (for homepage can see)
  const idPostCollection = await addDoc(req.body, idUserPostsSubCollection);
  return res.status(200).json({ idUserPostsSubCollection });
});

// @route   POST api/posts/reaction
// @desc    Add to post reaction
// @access  Public
router.post('/reaction', async (req, res) => {
  const { id, userID, reaction, reactionOld, userInfo, userPostedID } =
    req.body;
  const usersInfo = await getCollection('users', userPostedID);
  const { updateDoc, updatePostReactionGlobal } = setCollection('users');
  // find posts
  let index = usersInfo.posts.findIndex((post) => {
    return post.id === id;
  });
  // add people to reaction array
  if ((reactionOld && reaction) || !reactionOld) {
    // nếu ko có reactionOld nghĩa là user là người
    // lần đầu tiên thả reaction vào post
    if (!reactionOld) {
      // push user reaction vào
      usersInfo.posts[index].reaction[reaction] = [
        ...usersInfo.posts[index].reaction[reaction],
        userInfo,
      ];
      // auto increment
      usersInfo.posts[index].reaction['total'] =
        usersInfo.posts[index].reaction['total'] + 1;
    } else {
      // ngược lại là user đổi từ reaction này sang reaction khác
      let reactionIter = usersInfo.posts[index].reaction[reactionOld];
      let indexUserReaction = reactionIter.findIndex(
        (user) => user.userID === userID
      );
      // xoá reaction cũ
      reactionIter.splice(indexUserReaction, 1);
      // thêm reaction mới
      usersInfo.posts[index].reaction[reaction] = [
        ...usersInfo.posts[index].reaction[reaction],
        userInfo,
      ];
    }
  } else {
    let reactionIter = usersInfo.posts[index].reaction[reactionOld];
    let indexUserReaction = reactionIter.findIndex(
      (user) => user.userID === userID
    );
    reactionIter.splice(indexUserReaction, 1);
    // auto decrement
    usersInfo.posts[index].reaction['total'] =
      usersInfo.posts[index].reaction['total'] - 1;
    // update lại array
    usersInfo.posts[index].reaction[reactionOld] = reactionIter;
  }

  // update lại vị trí posts
  await updateDoc(usersInfo.posts, userPostedID);
  await updatePostReactionGlobal('posts', usersInfo.posts[index].reaction, id);
  return res.status(200).json('success');
});

module.exports = router;
