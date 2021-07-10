import { projectStorage } from '../config';
import { getDocument } from '../data/getDocument';
import { setCollection } from '../data/setCollection';
import { setStorage } from '../data/setStorage';
import { addPostToPostsCollection } from '../../components/YourThinkingModal/modules/backendServices';
import { v4 as uuidv4 } from 'uuid';

export const createAPost = () => {
  const { addDocWithID } = setCollection('users');
  const { addDoc } = setCollection('posts');

  const createAPostWithPicture = async (text, pictures, user, avatar) => {
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

    // create Post in User Profile
    const post = {
      username: user.username,
      userID: user.userID,
      content: text,
      avatar: avatar,
      picture: [...arrPicture],
      reaction: {
        total: 0,
        like: [],
        love: [],
        hug: [],
        haha: [],
        wow: [],
        sad: [],
        angry: [],
      },
      comments: [],
      createdAt: new Date(),
    };
    // create in collection Post (let everyone sees)
    // const id = await addDoc(post);
    const id = await addPostToPostsCollection(post);
    // add id to the post
    post.id = id;
    // create Post in User Profile
    userObject.posts = [...userObject.posts, post];
    await addDocWithID(userObject, user.userID);
  };

  const createAPostWithNoPicture = async (text, user, avatar) => {
    // lấy doc user ra
    const res = await getDocument('users', user.userID);
    const { addDoc } = setCollection('posts');
    // copy ra object moi
    const userObject = { ...res };
    // create Post
    const post = {
      username: user.username,
      userID: user.userID,
      content: text,
      avatar: avatar,
      picture: [],
      reaction: {
        like: [],
        love: [],
        hug: [],
        haha: [],
        wow: [],
        sad: [],
        angry: [],
      },
      comments: [],
      createdAt: new Date(),
    };
    // create in collection Post (let everyone sees)
    // const id = await addDoc(post);
    const id = await addPostToPostsCollection(post);

    // add id to the post
    post.id = id;
    // create Post in User Profile
    userObject.posts = [...userObject.posts, post];
    await addDocWithID(userObject, user.userID);
  };

  return { createAPostWithPicture, createAPostWithNoPicture };
};
