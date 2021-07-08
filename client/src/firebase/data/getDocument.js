import { projectFirestore } from '../config';

export const getDocument = async (collection, id) => {
  console.log(collection, id);
  let documentRef = await projectFirestore
    .collection(collection)
    .doc(id)
    .collection(collection)
    .doc(id);
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
