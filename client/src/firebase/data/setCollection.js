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

  const addDocWithID = async (subCollection, doc, userID) => {
    try {
      const res = await projectFirestore
        .collection(collection)
        .doc(userID)
        .collection(subCollection)
        .doc(userID)
        .set(doc);
    } catch (err) {
      console.log(err);
    }
  };

  const addCommentWithID = async (doc, id) => {
    const { text, imageBlob: picture, postID } = doc;
    console.log(doc);
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

  const updateNameFieldDoc = async (newName, userID) => {
    try {
      await projectFirestore
        .collection(collection)
        .doc(userID)
        .collection(collection)
        .doc(userID)
        .update({
          username: newName,
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

  const updateInfoFieldDoc = async (info, userID) => {
    try {
      const res = await projectFirestore
        .collection(collection)
        .doc(userID)
        .collection(collection)
        .doc(userID)
        .update({
          info: info,
        });
    } catch (err) {
      console.log(err);
    }
  };

  /** 
    @user currentUser in redux
    @subCollectionUser collection trong firebase user --> collection (2 level)
    @userID id of current user
    @userProfile profileInfo in redux
    @subCollectionProfile collection trong firebase user --> collection (2 level)
    @userProfileID id of profile user
  */
  const addRequestFriend = async (
    user,
    subCollectionUser,
    userID,
    userProfile,
    subCollectionProfile,
    userProfileID
  ) => {
    console.log(
      user,
      subCollectionUser,
      userID,
      userProfile,
      subCollectionProfile,
      userProfileID
    );
    try {
      await projectFirestore
        .collection(collection)
        .doc(userID)
        .collection(subCollectionUser)
        .doc(userID)
        .update({
          requested: firebase.firestore.FieldValue.arrayUnion({
            ...user,
          }),
        });
      await projectFirestore
        .collection(collection)
        .doc(userProfileID)
        .collection(subCollectionProfile)
        .doc(userProfileID)
        .update({
          incoming: firebase.firestore.FieldValue.arrayUnion({
            ...userProfile,
          }),
        });
    } catch (err) {
      console.log(err);
    }
  };

  /** 
    @user currentUser in redux
    @subCollectionUser collection trong firebase user --> collection (2 level)
    @userID id of current user
    @userProfile profileInfo in redux
    @subCollectionProfile collection trong firebase user --> collection (2 level)
    @userProfileID id of profile user
  */
  const removeRequestFriend = async (
    user,
    subCollectionUser,
    userID,
    userProfile,
    subCollectionProfile,
    userProfileID
  ) => {
    try {
      await projectFirestore
        .collection(collection)
        .doc(userID)
        .collection(subCollectionUser)
        .doc(userID)
        .update({
          requested: firebase.firestore.FieldValue.arrayRemove({
            ...user,
          }),
        });
      await projectFirestore
        .collection(collection)
        .doc(userProfileID)
        .collection(subCollectionProfile)
        .doc(userProfileID)
        .update({
          incoming: firebase.firestore.FieldValue.arrayRemove({
            ...userProfile,
          }),
        });
    } catch (err) {
      console.log(err);
    }
  };

  /** 
    @user currentUser in redux
    @subCollectionUser collection trong firebase user --> collection (2 level)
    @userID id of current user
    @userProfile profileInfo in redux
    @subCollectionProfile collection trong firebase user --> collection (2 level)
    @userProfileID id of profile user
  */
  const addFriendToBothUser = async (
    user,
    subCollectionUser,
    userID,
    userProfile,
    subCollectionProfile,
    userProfileID
  ) => {
    try {
      await projectFirestore
        .collection(collection)
        .doc(userID)
        .collection(subCollectionUser)
        .doc(userID)
        .update({
          friends: firebase.firestore.FieldValue.arrayUnion({
            ...userProfile,
          }),
        });
      await projectFirestore
        .collection(collection)
        .doc(userProfileID)
        .collection(subCollectionProfile)
        .doc(userProfileID)
        .update({
          friends: firebase.firestore.FieldValue.arrayUnion({
            ...user,
          }),
        });
    } catch (err) {
      console.log(err);
    }
  };

  /** 
    @user currentUser in redux
    @subCollectionUser collection trong firebase user --> collection (2 level)
    @userID id of current user
    @userProfile profileInfo in redux
    @subCollectionProfile collection trong firebase user --> collection (2 level)
    @userProfileID id of profile user
  */
  const unfriendToBothUser = async (
    user,
    subCollectionUser,
    userID,
    userProfile,
    subCollectionProfile,
    userProfileID
  ) => {
    console.log(
      user,
      subCollectionUser,
      userID,
      userProfile,
      subCollectionProfile,
      userProfileID
    );
    try {
      await projectFirestore
        .collection(collection)
        .doc(userID)
        .collection(subCollectionUser)
        .doc(userID)
        .update({
          friends: firebase.firestore.FieldValue.arrayRemove({
            ...userProfile,
          }),
        });
      await projectFirestore
        .collection(collection)
        .doc(userProfileID)
        .collection(subCollectionProfile)
        .doc(userProfileID)
        .update({
          friends: firebase.firestore.FieldValue.arrayRemove({
            ...user,
          }),
        });
    } catch (err) {
      console.log(err);
    }
  };

  const addMessageCollection = async (doc, userID, otherUserID) => {
    try {
      await projectFirestore
        .collection(collection)
        .doc(userID)
        .collection('with-user')
        .doc(otherUserID)
        .collection(collection)
        .add(doc);
      // Khi gửi tin nhắn thì bên sẽ add vào
      // doc của người nhận tin nhắn cái mới nhất
      // messages-notification => otherUser => newest-message => currentUser
      await projectFirestore
        .collection('messages-notification')
        .doc(otherUserID)
        .collection('newest-message')
        .doc(userID)
        .set({ ...doc, seen: false });
      // Khi gửi tin nhắn thì bên sẽ add vào
      // doc của người nhận tin nhắn cái mới nhất
      // messages => otherUser => with-user => currentUser => messages => doc
      await projectFirestore
        .collection(collection)
        .doc(otherUserID)
        .collection('with-user')
        .doc(userID)
        .collection(collection)
        .add(doc);
    } catch (err) {
      console.log(err);
    }
  };

  const updateSeenMessageField = async (userID, otherUserID) => {
    try {
      await projectFirestore
        .collection(collection)
        .doc(userID)
        .collection('newest-message')
        .doc(otherUserID)
        .update({
          seen: true,
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
    updateInfoFieldDoc,
    addRequestFriend,
    removeRequestFriend,
    addFriendToBothUser,
    unfriendToBothUser,
    updateNameFieldDoc,
    addMessageCollection,
    updateSeenMessageField,
  };
};
