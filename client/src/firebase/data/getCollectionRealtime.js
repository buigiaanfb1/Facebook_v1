import { projectFirestore } from '../../firebase/config';

const getCollectionRealtime = (collection, userID) => {
  console.log(collection, userID);
  let collectionRef = projectFirestore
    .collection(collection)
    .doc(userID)
    .collection(collection)
    .orderBy('createdAt');
  let documents = null;

  let unsub = collectionRef.onSnapshot(
    (snap) => {
      let results = [];
      snap.docs.forEach((doc) => {
        // đợi dự liệu trả về timestamp server
        doc.data().createdAt && results.push({ ...doc.data(), id: doc.id });
      });
      documents = results;
    },
    (err) => {
      console.err(err.message);
    }
  );

  const unsubcribe = () => {
    console.log('run unsubcribe');
    unsub();
  };
  return { documents, unsubcribe };
};

export default getCollectionRealtime;
