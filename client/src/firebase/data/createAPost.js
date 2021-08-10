import { setStorage } from '../data/setStorage';
import { addPostToPostsAndUsersPostCollectionServices } from '../../components/YourThinkingModal/modules/backendServices';
import { v4 as uuidv4 } from 'uuid';

export const createAPost = () => {
  const createAPostWithPicture = async (text, pictures, user, avatar = '') => {
    const { uploadPictureOfPost } = setStorage();
    // tạo mảng chứa url ảnh
    const arrPicture = [];
    // lấy doc user ra
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
    const id = await addPostToPostsAndUsersPostCollectionServices(post);
    return id;
  };

  const createAPostWithNoPicture = async (text, user, avatar = '') => {
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
        total: 0,
      },
      comments: [],
      createdAt: new Date(),
    };
    // create in collection Post (let everyone sees)
    // const id = await addDoc(post);
    const id = await addPostToPostsAndUsersPostCollectionServices(post);
    return id;
  };

  return { createAPostWithPicture, createAPostWithNoPicture };
};
