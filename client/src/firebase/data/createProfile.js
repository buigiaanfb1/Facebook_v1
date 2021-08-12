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
        avatar:
          'https://firebasestorage.googleapis.com/v0/b/facebook-for-cv.appspot.com/o/default%2Favatar-default.jpeg?alt=media&token=a1f34410-3760-4666-a3b0-e59e8444f8b0',
        wallpaper:
          'https://firebasestorage.googleapis.com/v0/b/facebook-for-cv.appspot.com/o/default%2FdefaultWallpaper.jpeg?alt=media&token=eafdf402-296d-4eb6-b14a-3d814fc3d905',
        slogan: '',
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
