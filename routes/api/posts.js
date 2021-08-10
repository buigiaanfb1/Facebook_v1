const express = require("express");
const setCollection = require("../../firebase/tools/setCollection");
const getCollection = require("../../firebase/tools/getCollection");
const router = express.Router();

// @route   POST api/posts/global
// @desc    Add to Post Collection
// @access  Public
router.post("/global", async (req, res) => {
  const { addDoc, addDocSubCollection, updatePostProfile } =
    setCollection("posts");
  // add vô collection user-posts
  const idUserPostsSubCollection = await addDocSubCollection(
    "user-posts",
    req.body.userID,
    "posts",
    req.body
  );
  // add vô collection posts (for homepage can see)
  const idPostCollection = await addDoc(req.body, idUserPostsSubCollection);
  return res.status(200).json({ idUserPostsSubCollection });
});

// @route   POST api/posts/reaction
// @desc    Add to post reaction
// @access  Public
router.post("/reaction", async (req, res) => {
  const { updateDoc, updatePostReactionGlobal, updatePostProfile } =
    setCollection();
  const { id, userID, reaction, reactionOld, userInfo, userPostedID, postID } =
    req.body;
  console.log(postID);
  let postInfo = await getCollection(
    "user-posts",
    "posts",
    userPostedID,
    postID
  );

  // add people to reaction array
  if ((reactionOld && reaction) || !reactionOld) {
    // nếu ko có reactionOld nghĩa là user là người
    // lần đầu tiên thả reaction vào post
    if (!reactionOld) {
      // push user reaction vào
      postInfo.reaction[reaction] = [...postInfo.reaction[reaction], userInfo];
      // auto increment
      postInfo.reaction["total"] = postInfo.reaction["total"] + 1;
    } else {
      // ngược lại là user đổi từ reaction này sang reaction khác
      let reactionIter = postInfo.reaction[reactionOld];
      let indexUserReaction = reactionIter.findIndex(
        (user) => user.userID === userID
      );
      // xoá reaction cũ
      reactionIter.splice(indexUserReaction, 1);
      // thêm reaction mới
      postInfo.reaction[reaction] = [...postInfo.reaction[reaction], userInfo];
    }
  } else {
    let reactionIter = postInfo.reaction[reactionOld];
    let indexUserReaction = reactionIter.findIndex(
      (user) => user.userID === userID
    );
    reactionIter.splice(indexUserReaction, 1);
    // auto decrement
    postInfo.reaction["total"] = postInfo.reaction["total"] - 1;
    // update lại array
    postInfo.reaction[reactionOld] = reactionIter;
  }

  console.log(userPostedID,
    postID,
    postInfo.reaction)

  // update lại vị trí posts
  await updatePostProfile(
    "user-posts",
    "posts",
    userPostedID,
    postID,
    postInfo.reaction
  );
  // await updatePostReactionGlobal("posts", usersInfo.posts[index].reaction, id);
  return res.status(200).json("success");
});

module.exports = router;
