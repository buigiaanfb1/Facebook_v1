import firebase from 'firebase/app';
import { projectStorage } from '../config';

export const getStorage = (path) => {
  console.log(path);
  const getPictureMessenger = async () => {
    const storageRef = projectStorage.ref(path);
    try {
      storageRef.listAll().then(function (result) {
        result.items.forEach(function (imageRef) {
          imageRef.getDownloadURL().then(function (url) {
            console.log(url);
          });
        });
      });
    } catch (err) {
      console.log(err);
    }
  };

  return { getPictureMessenger };
};
