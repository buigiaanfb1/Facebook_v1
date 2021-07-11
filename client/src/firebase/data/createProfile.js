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
        avatar: '',
        wallpaper: '',
        slogan: '',
        posts: [],
        pictures: [],
        friends: [],
        createdAt: timestamp(),
      };
      await addDocWithID(doc, user.uid);
      return doc;
    }
    return res;
  } catch (err) {
    console.log(err);
  }
};
