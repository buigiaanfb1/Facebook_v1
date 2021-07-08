import { projectFirestore } from '../config';

export const setCollection = (document) => {
  const addDoc = async (doc) => {
    try {
      const res = await projectFirestore.collection(document).add(doc);
      return res;
    } catch (err) {
      console.log(err);
    }
  };

  const addDocWithID = async (doc, userID) => {
    try {
      const res = await projectFirestore
        .collection(document)
        .doc(userID)
        .collection(document)
        .doc(userID)
        .set(doc);
    } catch (err) {
      console.log(err);
    }
  };
  return { addDoc, addDocWithID };
};
