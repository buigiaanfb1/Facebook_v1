import { projectFirestore } from '../../firebase/config';

const getCollectionRealtime = (collection, userID) => {
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
      console.log(documents);
    },
    (err) => {
      console.err(err.message);
    }
  );

  // watchEffect((onInvalidate) => {
  //   onInvalidate(() => unsub());
  // });

  const unsubscribeListener = () => {
    unsub();
  };
  return { documents, unsubscribeListener };
};

export default getCollectionRealtime;
