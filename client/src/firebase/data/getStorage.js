import firebase from 'firebase/app';
import { projectStorage } from '../config';

export const getStorage = () => {
  const getPictureMessenger = async (path) => {
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

  const getPictureProfile = async (path) => {
    const storageRef = projectStorage.ref(path);
    console.log(path);
    try {
      return await (
        await storageRef.listAll()
      ).items;
    } catch (err) {
      console.log(err);
    }
  };

  return { getPictureMessenger, getPictureProfile };
};
