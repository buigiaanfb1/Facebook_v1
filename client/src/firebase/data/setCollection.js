import { projectFirestore } from '../config';

export const setCollection = (document) => {
  const addDoc = async (doc) => {
    try {
      const res = await projectFirestore.collection(document).add(doc);
      return res.id;
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

  const updateWallpaperFieldDoc = async (wallpaperURL, userID) => {
    try {
      const res = await projectFirestore
        .collection(document)
        .doc(userID)
        .collection(document)
        .doc(userID)
        .update({
          wallpaper: wallpaperURL,
        });
    } catch (err) {
      console.log(err);
    }
  };

  const updateAvatarFieldDoc = async (avatarURL, userID) => {
    try {
      const res = await projectFirestore
        .collection(document)
        .doc(userID)
        .collection(document)
        .doc(userID)
        .update({
          avatar: avatarURL,
        });
    } catch (err) {
      console.log(err);
    }
  };
  return {
    addDoc,
    addDocWithID,
    updateWallpaperFieldDoc,
    updateAvatarFieldDoc,
  };
};
