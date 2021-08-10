const db = require('../config');

const getDocument = async (collection, subCollection, id, subId) => {
  console.log(id)
  let documentRef = await db
    .collection(collection)
    .doc(id)
    .collection(subCollection)
    .doc(subId);
  return await documentRef
    .get()
    .then((doc) => {
      if (doc.exists) {
        return { ...doc.data(), id: doc.id };
      } else {
        // doc.data() will be undefined in this case
        return null;
      }
    })
    .catch((error) => {
      console.log('Error getting document:', error);
    });
};

module.exports = getDocument;
