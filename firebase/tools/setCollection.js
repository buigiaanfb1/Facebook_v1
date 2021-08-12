const db = require('../config');

const setCollection = () => {
  const addDocToGlobalPost = async (doc, idUserPostsSubCollection, where) => {
    try {
      await db.collection(where).doc(idUserPostsSubCollection).set(doc);
    } catch (err) {
      console.log(err);
    }
  };

  const addDocToGlobalComment = async (
    doc,
    idUserPostsSubCollection,
    where
  ) => {
    try {
      await db.collection(where).doc(idUserPostsSubCollection).set(doc);
    } catch (err) {
      console.log(err);
    }
  };

  const addDocSubCollection = async (
    collection,
    userID,
    subCollection,
    doc
  ) => {
    try {
      const res = await db
        .collection(collection)
        .doc(userID)
        .collection(subCollection)
        .add(doc);
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

  const updatePostProfile = async (
    collection,
    subCollection,
    id,
    subId,
    reactionArr
  ) => {
    try {
      await db
        .collection(collection)
        .doc(id)
        .collection(subCollection)
        .doc(subId)
        .update({
          reaction: reactionArr,
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

  return {
    addDocToGlobalPost,
    addDocSubCollection,
    updateDoc,
    updatePostReactionGlobal,
    updatePostProfile,
    addDocToGlobalComment,
  };
};

module.exports = setCollection;
