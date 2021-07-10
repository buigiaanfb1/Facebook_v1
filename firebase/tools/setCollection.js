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
      const res = await db
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
  return { addDoc, updateDoc };
};

module.exports = setCollection;
