import firebase from 'firebase/app';
import { projectFirestore } from '../config';
import { setStorage } from './setStorage';
import { v4 as uuidv4 } from 'uuid';

export const setCollection = (collection) => {
  const addDoc = async (doc) => {
    try {
      const res = await projectFirestore.collection(collection).add(doc);
      return res.id;
    } catch (err) {
      console.log(err);
    }
  };

  const addDocWithID = async (doc, userID) => {
    try {
      const res = await projectFirestore
        .collection(collection)
        .doc(userID)
        .collection(collection)
        .doc(userID)
        .set(doc);
    } catch (err) {
      console.log(err);
    }
  };

  const addCommentWithID = async (doc, id) => {
    const { text, imageBlob: picture, postID } = doc;
    console.log(text, picture);
    if (picture.length > 0) {
      const { uploadPictureComment } = setStorage();
      // upload ảnh lên
      const { url } = await uploadPictureComment(postID, picture, uuidv4());
      if (url) {
        delete doc.imageBlob;
        doc.imageBlob = [url];
        try {
          await projectFirestore
            .collection(collection)
            .doc(id)
            .update({
              comments: firebase.firestore.FieldValue.arrayUnion({
                ...doc,
                createdAt: new Date(),
              }),
            });
        } catch (err) {
          console.log(err);
        }
      }
    } else {
      try {
        await projectFirestore
          .collection(collection)
          .doc(id)
          .update({
            comments: firebase.firestore.FieldValue.arrayUnion({
              ...doc,
              createdAt: new Date(),
            }),
          });
      } catch (err) {
        console.log(err);
      }
    }
  };

  const updateWallpaperFieldDoc = async (wallpaperURL, userID) => {
    try {
      const res = await projectFirestore
        .collection(collection)
        .doc(userID)
        .collection(collection)
        .doc(userID)
        .update({
          wallpaper: wallpaperURL,
        });
    } catch (err) {
      console.log(err);
    }
  };

  const updateSloganFieldDoc = async (slogan, userID) => {
    try {
      const res = await projectFirestore
        .collection(collection)
        .doc(userID)
        .collection(collection)
        .doc(userID)
        .update({
          slogan: slogan,
        });
    } catch (err) {
      console.log(err);
    }
  };

  const updateAvatarFieldDoc = async (avatarURL, userID) => {
    try {
      const res = await projectFirestore
        .collection(collection)
        .doc(userID)
        .collection(collection)
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
    addCommentWithID,
    updateSloganFieldDoc,
  };
};
