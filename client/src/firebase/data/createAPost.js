import { projectStorage } from '../config';
import { getDocument } from '../data/getDocument';
import { setCollection } from '../data/setCollection';
import { setStorage } from '../data/setStorage';
import { v4 as uuidv4 } from 'uuid';
export const createAPost = () => {
  const { addDocWithID } = setCollection('users');
  const createAPostWithPicture = async (text, pictures, user) => {
    const { uploadPictureOfPost } = setStorage();
    // tạo mảng chứa url ảnh
    const arrPicture = [];
    // lấy doc user ra
    const res = await getDocument('users', user.userID);
    // copy ra object moi
    const userObject = { ...res };
    for (const picture of pictures) {
      // upload ảnh lên
      const { url } = await uploadPictureOfPost(user.userID, picture, uuidv4());
      arrPicture.push(url);
    }
    // create Post
    const post = {
      username: user.username,
      userID: user.userID,
      content: text,
      picture: [...arrPicture],
      reaction: [],
      comments: [],
    };
    userObject.posts = [...userObject.posts, post];
    await addDocWithID(userObject, user.userID);
  };

  const createAPostWithNoPicture = async (text, user) => {
    // lấy doc user ra
    const res = await getDocument('users', user.userID);
    // copy ra object moi
    const userObject = { ...res };
    // create Post
    const post = {
      username: user.username,
      userID: user.userID,
      content: text,
      picture: [],
      reaction: [],
      comments: [],
    };
    userObject.posts = [...userObject.posts, post];
    await addDocWithID(userObject, user.userID);
  };

  return { createAPostWithPicture, createAPostWithNoPicture };
};
