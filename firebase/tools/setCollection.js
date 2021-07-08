const projectFirestore = require('../config');

const setCollection = (document) => {
  const addDoc = async (doc) => {
    try {
      const res = await projectFirestore.collection(document).add(doc);
      return res.id;
    } catch (err) {
      console.log(err);
    }
  };
  return { addDoc };
};

module.exports = setCollection;
