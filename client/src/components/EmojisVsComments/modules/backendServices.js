import axios from 'axios';

export const addReactionServices = async (reactionData) => {
  const data = {
    id: reactionData.reactionPicker.id,
    reaction: reactionData.reactionPicker.reaction,
    reactionOld: reactionData.reactionPicker.userReactionOld,
    userID: reactionData.reactionPicker.userID,
    userPostedID: reactionData.userPostedID,
    userInfo: reactionData.user,
  };
  try {
    const res = await axios({
      url: '/api/posts/reaction',
      data: data,
      method: 'POST',
    });
    return res.data;
  } catch (err) {
    console.log(err.message);
  }
};
