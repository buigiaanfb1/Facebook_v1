import { projectFirestore } from '../config';

export const getDocument = async (collection, id) => {
  let documentRef = await projectFirestore
    .collection(collection)
    .doc(id)
    .collection(collection)
    .doc(id);
  return await documentRef
    .get()
    .then((doc) => {
      if (doc.exists) {
        return { ...doc.data() };
      } else {
        // doc.data() will be undefined in this case
        return null;
      }
    })
    .catch((error) => {
      console.log('Error getting document:', error);
    });
};

export const getSubDocument = async (collection, subCollection, id) => {
  let documentRef = await projectFirestore
    .collection(collection)
    .doc(id)
    .collection(subCollection)
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

export const getDocumentPostProfile = async (
  collectionMain,
  collectionSub,
  userId
) => {
  let arr = [];
  let documentRef = await projectFirestore
    .collection(collectionMain)
    .doc(userId)
    .collection(collectionSub)
    .orderBy('createdAt')
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        arr.push({ ...doc.data(), id: doc.id });
      });
    });
  return arr;
};

export const getDocumentPostGlobal = async (collection) => {
  const snapshot = await projectFirestore.collection(collection).get();
  return snapshot.docs.map((doc) => doc.data());
};
