import { getDocument } from './getDocument';
import { setCollection } from './setCollection';
import { timestamp } from '../config';

export const createProfile = async (user) => {
  const { addDocWithID } = setCollection('users');
  try {
    // kiểm tra đã tạo profile chưa
    const res = await getDocument('users', user.uid);
    // chưa thì tạo
    if (!res) {
      const doc = {
        userID: user.uid,
        username: user.displayName,
        email: user.email,
        avatar: null,
        wallpaper: null,
        slogan: null,
        posts: [],
        pictures: [],
        friends: [],
        createdAt: timestamp(),
      };
      const addDocStatus = await addDocWithID(doc, user.uid);
      console.log(addDocStatus);
    } else {
      return res;
    }
  } catch (err) {
    console.log(err);
  }
};
