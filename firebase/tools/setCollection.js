const db = require('../config');

const setCollection = (document) => {
  const addDoc = async (doc) => {
    try {
      const res = await db.collection(document).add(doc);
      return res.id;
    } catch (err) {
      console.log(err);
    }
  };
  const updateDoc = async (doc, userID) => {
    try {
      await db
        .collection(document)
        .doc(userID)
        .collection(document)
        .doc(userID)
        .update({
          posts: doc,
        });
    } catch (err) {
      console.log(err);
    }
  };

  const updatePostReactionGlobal = async (where, reactionArr, id) => {
    try {
      await db.collection(where).doc(id).update({
        reaction: reactionArr,
      });
    } catch (err) {
      console.log(err);
    }
  };
  return { addDoc, updateDoc, updatePostReactionGlobal };
};

module.exports = setCollection;
